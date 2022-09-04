const fs = require("fs");
const path = require("path");

/**
 * Helper function to parse the given json file.
 * @param {*} fileName
 */
const loadJsonFile = (fileName) => {
  if (!fs.existsSync(fileName)) {
    console.error(`Package file ${fileName} not found`);
  }
  return JSON.parse(fs.readFileSync(fileName, "utf8"));
};

const packageFileName = path.join("node_modules", "@mdi", "svg", "package.json");
const package = loadJsonFile(packageFileName);
console.log(package.version);

const metaFileName = path.join("node_modules", "@mdi", "svg", "meta.json");
const meta = loadJsonFile(metaFileName);
console.log(meta);
