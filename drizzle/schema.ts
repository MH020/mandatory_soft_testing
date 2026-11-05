import { pgTable, char, varchar, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const postalCode = pgTable("postal_code", {
	cPostalCode: char({ length: 4 }).primaryKey(),
	cTownName: varchar({ length: 20 }).default(sql`NULL`),
});
