import { postalCode } from "../../drizzle/schema.js";
import db from "../db/connection.js";

export async function getPostalcodes() {
  return await db.select({
    post_code: postalCode.cPostalCode,
    city_name: postalCode.cTownName,
  }).from(postalCode);
}




