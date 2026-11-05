import { postalCode } from "../../drizzle/schema.js";
import db from "../db/connection.js";

const postalCodes = await db
  .select({
    post_code: postalCode.cPostalCode,
    city_name: postalCode.cTownName,
  }).from(postalCode);



export function randomStreet() { 
    const length = Math.floor(Math.random() * 10) + 5;
    const letters = "qwertyuiopåøælkjhgfdsazxcvbnm";
    let result = "";

    for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
    }

  return result;
}

export function randomNumberWithUppercaseLetter() {
    const randomNumber = Math.floor(Math.random() * 999) + 1;
}