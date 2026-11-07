import express, { type Express, type Request, type Response } from 'express';
import { getRandomNameGender, getRandomPerson, getRandomPhoneNumber } from '../service/person-service.js';
import { NameGenderToPersonDTO, PersonDTO } from '../dtos/person-dto.js';
import { createRandomDateOfBirth, makeIntoIsodateString, readFile } from '../repository/person-repository.js';
import { generateCprNumberFromDobAndGender } from '../service/cpr-service.js';
import { adress } from '../service/address-service.js';

const router: Express = express();
const peoplelist = readFile();

// Returns full person(s)
// Todo: add query parameter: ?n=amount
router.get('/person', async (req: Request, res: Response) => {

  const count = Number(req.query.n ?? 1);

  const persons = peoplelist.persons;

  const createPerson = async () => {
    const person = getRandomNameGender(persons);
    const dob = createRandomDateOfBirth();

    if (count > 100) {
        return res.status(400).send({ error: 'n must be beween 1 and 100' });
    }

    return {
      CPR: generateCprNumberFromDobAndGender(dob, person.gender),
      firstName: person.name,
      lastName: person.surname,
      gender: person.gender,
      birthDate: makeIntoIsodateString(dob),
      phoneNumber: getRandomPhoneNumber(),
      address: await adress(),
    };
  };

  const results = await Promise.all(
    Array.from({ length: count }, () => createPerson())
  );

  if (count === 1) {
    return res.send(results[0])
  }
  return res.send(results);

});


router.get('/name-gender', (req: Request, res: Response) => {
    let persons = peoplelist.persons
    let person = getRandomPerson(persons)!
    
    res.send(NameGenderToPersonDTO(person));
});


router.get('/name-gender-dob', (req: Request, res: Response) => {
    let persons = peoplelist.persons;
    let person = getRandomNameGender(persons);
    let dob = createRandomDateOfBirth();

    res.send({
        firstName: person.name,
        lastName: person.surname,
        gender: person.gender,
        birthDate: makeIntoIsodateString(dob)
    });

});

router.get('/cpr', (req: Request, res: Response) => {
    const dob: Date = createRandomDateOfBirth();
    const gender: string = getRandomNameGender(peoplelist.persons).gender;

    const cpr: string = generateCprNumberFromDobAndGender(dob, gender);
    res.send( {"CPR" : cpr } );
});

    

router.get('/cpr-name-gender', (req: Request, res: Response) => {
    const dob: Date = createRandomDateOfBirth();
    const person = getRandomNameGender(peoplelist.persons);
    const cpr: String = generateCprNumberFromDobAndGender(dob, person.gender);

    res.send({
        CPR: cpr,
        firstName: person.name,
        lastName: person.surname,
        gender: person.gender,
    });

});


router.get('/cpr-name-gender-dob', (req: Request, res: Response) => {
    const personDTO : PersonDTO = {} as PersonDTO;

    const person = getRandomNameGender(peoplelist.persons);
    personDTO.firstName = person.name;
    personDTO.lastName = person.surname;
    personDTO.gender = person.gender;

    const dob = createRandomDateOfBirth();
    personDTO.birthDate = makeIntoIsodateString(dob);

    personDTO.CPR = generateCprNumberFromDobAndGender(dob, person.gender);
    res.send(personDTO);
});


router.get('/phone', (req: Request, res: Response) => {
    const phoneNumber = getRandomPhoneNumber();
    res.send({phoneNumber});
});


router.get('/address', async (req: Request, res: Response) => {
    const address = await adress();

    res.send({
        address: address  
    });

});



export default router;
