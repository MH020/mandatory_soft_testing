import { postalCode } from "../../drizzle/schema.js";
import db from "../db/connection.js";


export const postalCodes = await db
  .select({
    post_code: postalCode.cPostalCode,
    city_name: postalCode.cTownName,
  }).from(postalCode);



