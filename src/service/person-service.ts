import type { NameGender } from "../dtos/person-dto.js";

export function getRandomPerson(peoplelist: Array<NameGender>) {
    return peoplelist[Math.floor(Math.random() * peoplelist.length)];
}