import fs from 'fs';
import path from 'path'
import type { people } from '../dtos/person-dto.js';
import { JsonableValue } from 'ts-jest';
import { json } from 'stream/consumers';

const filePath = path.resolve(process.cwd(), 'data/person.json');
const start = Date.UTC(1868, 0, 1);


export function readFile() {
    const data = fs.readFileSync(filePath, "utf8")
    const people = JSON.parse(data) as people
    return people
}



export function createRandomDateOfBirth() {
    const now = new Date(); 

    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    let daysDiferance = (today - start) * Math.random() + start; 


    return new Date(daysDiferance);

}

export function makeIntoIsodate(date: Date) {
    return JSON.stringify({ birthdate: date.toISOString().slice(0, 10) });
}

console.log(makeIntoIsodate(createRandomDateOfBirth()))