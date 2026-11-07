import express, { type Express, type Request, type Response } from 'express';
import { getRandomNameGender, getRandomPerson, getRandomPhoneNumber } from '../service/person-service.js';
import { NameGenderToPersonDTO } from '../dtos/person-dto.js';
import { createRandomDateOfBirth, makeIntoIsodateString, readFile } from '../repository/person-repository.js';
import { generateCprNumberFromDobAndGender } from '../service/cpr-service.js';
import { adress } from '../service/address-service.js';

const router: Express = express();
const peoplelist = readFile();

// Returns full person(s)
// Todo: add query parameter: ?n=amount
router.get('/person', (req: Request, res: Response) => {
    res.send('TODO!');
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
        name: person.name,
        surname: person.surname,
        gender: person.gender,
        dateOfBirth: makeIntoIsodateString(dob)
    });

});

router.get('/cpr', (req: Request, res: Response) => {
    const dob: Date = createRandomDateOfBirth();
    const gender: string = getRandomNameGender(peoplelist.persons).gender;

    const cpr: string = generateCprNumberFromDobAndGender(dob, gender);
    res.send( [{"CPR" : cpr }] );
});

router.get('/cpr-name-gender', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/cpr-name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/phone', (req: Request, res: Response) => {
    const phoneNumber = getRandomPhoneNumber();
    res.send(phoneNumber);
});


router.get('/address', async (req: Request, res: Response) => {
    const address = await adress();

    res.send({
        address: address  
    });

});



export default router;
