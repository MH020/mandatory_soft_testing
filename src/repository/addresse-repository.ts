import { postalCode } from "../../drizzle/schema.js";
import db from "../db/connection.js";

const postalCodes = await db
  .select({
    post_code: postalCode.cPostalCode,
    city_name: postalCode.cTownName,
  }).from(postalCode);



export function randomLetters(length: number) { 
    const letters = "qwertyuiopåøælkjhgfdsazxcvbnm";
    let result = "";

    for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
    }

  return result;
}

export function randomNumberWithUppercaseLetter() {
    const randomNumber = Math.floor(Math.random() * 999) + 1;

    if (Math.random() < 0.5) {
        let letter = randomLetters(1).toUpperCase()
        return `${randomNumber}${letter}`
    }
    return `${randomNumber}`;
}

export function floor() {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    if (Math.random() < 0.5) {
        return "st";
    }
    return `${randomNumber}`;

}

export function door() {
  const choice = Math.floor(Math.random() * 5);
  if (choice === 0) return "th"
  if (choice === 1) return "mf"
  if (choice === 2) return "tv"
  if (choice === 3) return Math.floor(Math.random() * 50) + 1;

  let letter = randomLetters(1); 
  let randomNumber = Math.floor(Math.random() * 1000);
  const dash = Math.random() < 0.5 ? "-" : "";

  return `${letter}${dash}${randomNumber}`;

}