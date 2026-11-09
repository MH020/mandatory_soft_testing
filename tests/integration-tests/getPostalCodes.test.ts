import { afterEach, describe, expect, it, jest, test } from '@jest/globals';
import { getPostalCodes } from "../../src/repository/addresse-repository.js";



describe("getPostalCodes", () => {
  it("returns a list", async () => {
    const rows = await getPostalCodes();

    expect(Array.isArray(rows)).toBe(true);
  });

  it("returns at least 1", async () => {
    const rows = await getPostalCodes();

    expect(rows.length).toBeGreaterThan(0);
  });
});