import type { person } from "../dtos/person-dto.js";




export function get_random_person(peoplelist: Array<person>) {
    return peoplelist[Math.floor(Math.random() * peoplelist.length)];
}