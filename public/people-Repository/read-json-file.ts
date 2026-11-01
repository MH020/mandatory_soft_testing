import fs from 'fs';
import path from 'path'
import type { people } from '../../src/dtos/person-dto.js';

const filePath = path.resolve(process.cwd(), 'data/person.json');

function readFile() {
    const data = fs.readFileSync(filePath, "utf8")
    const people = JSON.parse(data) as people
    return people
}

export default readFile