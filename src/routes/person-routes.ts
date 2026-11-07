import express, { type Express, type Request, type Response } from 'express';
import {generateCprNumberFromDobAndGender} from '../service/cpr-service.js'
import { adress } from '../service/address-service.js';
import { getRandomNameGender } from '../service/person-service.js';
import readFile from '../repository/person-repository.js';

const router: Express = express();
const peoplelist = readFile();

// Returns full person(s)
// Todo: add query parameter: ?n=amount
router.get('/person', (req: Request, res: Response) => {
    res.send("TODO!");
});


router.get('/name-gender', (req: Request, res: Response) => {
    let persons = peoplelist.persons
    let person = getRandomNameGender(persons);
    res.send(person);
});


router.get('/name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});

router.get('/cpr', (req: Request, res: Response) => {
    const dob: Date = generateDob();
    const gender: string = getRandomNameGender(peoplelist.persons)?.gender ?? "undefined";

    const cpr: string = generateCprNumberFromDobAndGender(dob, gender);
    res.send( [cpr] );

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
