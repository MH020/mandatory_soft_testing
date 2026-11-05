import { NameGender } from "../dtos/person-dto.js";


// return random name and gender
export function getRandomNameGender(nameGenderList: Array<NameGender>) {
    return nameGenderList[Math.floor(Math.random() * nameGenderList.length)];
}

