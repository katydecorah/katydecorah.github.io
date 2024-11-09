import fs from "fs";

const personalDictionary = fs.readFileSync("./katydecorah.dic", "utf8");

export default {
  "retext-simplify": {
    ignore: [
      "submit",
      "forward",
      "participate",
      "address",
      "function",
      "request",
      "parameters",
      "option",
      "maintain",
      "evaluate",
      "delete",
      "effect",
      "interface",
      "expiration",
    ],
  },
  "retext-spell": {
    personal: personalDictionary,
  },
};
