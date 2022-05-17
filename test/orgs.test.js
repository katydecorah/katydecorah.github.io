import { readData } from "./utils.js";

describe("organizations", () => {
  test("Check organization metadata", async () => {
    const { metadata } = await readData("_data/", "organizations.yml");
    for (const { name, description, link } of metadata) {
      expect(name).toBeDefined();
      expect(description).toBeDefined();
      expect(description.endsWith(".")).toBeTruthy();
      expect(link).toBeDefined();
    }
  });
});
