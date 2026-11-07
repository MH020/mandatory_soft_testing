import express, { type Express, type Request, type Response } from 'express';
import { adress } from '../service/addresses-service.js';
import readFile from '../repository/person-repository.js';
import { getRandomPerson } from '../service/person-service.js';
import { PersonDTO } from '../dtos/person-dto.js';

const router: Express = express();
const peoplelist = readFile(); 


// Todo: add query parameter: ?n=amount
router.get('/person', (req: Request, res: Response) => {
    res.send("TODO!");
});


router.get('/name-gender', (req: Request, res: Response) => {
    /*
    let persons = peoplelist.persons
    let person = getRandomPerson(persons)
*/
    let personDto: PersonDTO = {
        
    } 

    res.send(person);
});


router.get('/name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});

router.get('/cpr', (req: Request, res: Response) => {
    res.send('TODO!');

});

router.get('/cpr-name-gender', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/cpr-name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/phone', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/address', (req: Request, res: Response) => {
    res.send(adress());

});



export default router;
