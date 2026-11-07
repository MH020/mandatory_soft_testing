import fs from 'fs';
import path from 'path'
import type { people } from '../dtos/person-dto.js';
import { JsonableValue } from 'ts-jest';
import { json } from 'stream/consumers';

const filePath = path.resolve(process.cwd(), 'data/person.json');

export function readFile() {
    const data = fs.readFileSync(filePath, "utf8")
    const people = JSON.parse(data) as people
    return people
}

const start = Date.UTC(1868, 0, 1);

export function createRandomDateOfBirth() {
    // Get today's date
    const today = Date.now();

    // Find a random date between the start date and today
    // Using formular: (differnce between max and min) * (random from [0, 1[) + min)
    let daysDiferance = (today - start) * Math.random() + start; 
    const randomDay = new Date(daysDiferance);

    // Return only the day, month and year, without hours, minutes and seconds etc.
    return new Date(Date.UTC(randomDay.getFullYear(), randomDay.getMonth(), randomDay.getDate()));

}

export function makeIntoIsodate(date: Date) {
    return JSON.stringify({ birthdate: date.toISOString().slice(0, 10) });
}
