import test from "tape";
import { readData } from "./utils.js";

const { metadata } = readData("_data/", "organizations.yml");

metadata.forEach((org) => {
  test(org.name, (t) => {
    t.ok(org.name, "must have a name");
    t.ok(org.description, "must have a description");
    t.ok(org.description.endsWith("."), "description must end in period");
    t.ok(org.link, "must have a link");
    t.end();
  });
});
