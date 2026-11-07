import type { person } from "../dtos/person-dto.js";

export function getRandomPerson(peoplelist: Array<person>) : person {
    return peoplelist[Math.floor(Math.random() * peoplelist.length)]!;
}