import { NameGender } from "../dtos/person-dto.js";


// return random name and gender
export function getRandomNameGender(peoplelist: Array<NameGender>) {
    return peoplelist[Math.floor(Math.random() * peoplelist.length)];
}

