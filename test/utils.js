import { readFileSync } from "fs";
import jsyaml from "js-yaml";

export const readData = (dir, filename) => {
  const file = readFileSync(dir + filename, "utf-8");

  return {
    name: filename,
    file,
    metadata: jsyaml.load(file),
  };
};
