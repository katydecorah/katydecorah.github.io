import { readFile } from "fs/promises";
import { load } from "js-yaml";

export async function readData(dir, filename) {
  const file = await readFile(`${dir}${filename}`, "utf-8");
  return {
    name: filename,
    file,
    metadata: load(file),
  };
}
