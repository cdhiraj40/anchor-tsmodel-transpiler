import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { AnchorTypes } from "./anchor-mappings";

let anchorTypesKeys = Object.keys(AnchorTypes);
let anchorTypesValues = Object.values(AnchorTypes);

let idl = {
  accounts: JSON.parse(readFileSync("./idl.json", "utf8")).accounts,
  types: JSON.parse(readFileSync("./idl.json", "utf8")).types,
};

let eureka = 'import { PublicKey } from "@solana/web3.js"\n\n';
Object.keys(idl).map((key) => {
  try {
    if (key === "accounts") {
      const accounts = idl.accounts;
      for (let idx in accounts) {
        let data = "";
        const account = accounts[idx];

        if (account.type.kind === "struct") {
          data += `;
                    export interface ${account.name} {
                    ${account?.type?.fields?.map((field: any) => {
                      let fields = "";

                      if (Object.keys(field.type).includes("array")) {
                        let arrayType = field.type.array[0];

                        if (arrayType.defined) {
                          fields += `${field.name}: ${arrayType.defined}[] // length of ${field.type.array[1]} in IDL\n`;
                        } else {
                          if (anchorTypesKeys.includes(arrayType))
                            fields += `${field.name}: ${
                              anchorTypesValues[
                                anchorTypesKeys.indexOf(arrayType)
                              ]
                            }[] // length of ${field.type.array[1]} in IDL\n`;
                        }
                      }

                      if (anchorTypesKeys.includes(field.type)) {
                        fields += `${field.name}: ${
                          anchorTypesValues[anchorTypesKeys.indexOf(field.type)]
                        }\n`;
                      }
                      return fields;
                    })}}`;
          data += "\n\n";
        } else {
          throw new Error("Currently only structs are supported");
        }
        eureka += data;
      }
    } else if (key === "types") {
      const types = idl.types;
      for (let idx in types) {
        let data = "";
        const account = types[idx];

        if (account.type.kind === "struct") {
          data += `export interface ${account.name} {
                    ${account?.type?.fields?.map((field: any) => {
                      let fields = "";

                      if (Object.keys(field.type).includes("array")) {
                        let arrayType = field.type.array[0];

                        if (arrayType.defined) {
                          fields += `${field.name}: ${arrayType.defined}[] // length of ${field.type.array[1]} in IDL\n`;
                        } else {
                          if (anchorTypesKeys.includes(arrayType))
                            fields += `${field.name}: ${
                              anchorTypesValues[
                                anchorTypesKeys.indexOf(arrayType)
                              ]
                            }[] // length of ${field.type.array[1]} in IDL\n`;
                        }
                      }

                      if (anchorTypesKeys.includes(field.type)) {
                        fields += `${field.name}: ${
                          anchorTypesValues[anchorTypesKeys.indexOf(field.type)]
                        }\n`;
                      }
                      return fields;
                    })}}`;
          data += "\n\n";
        } else {
          throw new Error("Currently only structs are supported");
        }
        eureka += data;
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    writeFile(eureka);
  }
});

/**
 * Renames file
 */
// const newFileName = idl.accounts.map((a: any) => a.name);
//
// rename("./demo.ts", `./${newFileName}.ts`, (err) => {
//     if (err) throw err;
//     console.log("Rename complete!");
// });

/**
 * Writes file
 */

function writeFile(content: string) {
  writeFileSync("./demo.ts", content);
}
