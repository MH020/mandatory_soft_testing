import fs from 'fs';
import path from 'path'
import type { People } from '../dtos/person-dto.js';

const filePath = path.resolve(process.cwd(), 'data/person.json');

function readFile() {
    const data = fs.readFileSync(filePath, "utf8")
    const people = JSON.parse(data) as People
    return people
}

export default readFile