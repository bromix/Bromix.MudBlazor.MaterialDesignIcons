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

/**
 * Convert a snake case string to a camel case string.
 * @param {*} str
 * @returns
 */
const SnakeCaseToCamelCase = (str) => str.toLowerCase().replace(/((^|[-_])[a-z0-9])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));

const addSvg = (output, metaItem, indent = "\t") => {
  output.push(`${indent}/// <summary>`);
  output.push(`${indent}/// <b>Codepoint: </b>${metaItem.codepoint}<br/>`);
  output.push(`${indent}/// <b>Author: </b>${metaItem.author}<br/>`);
  output.push(`${indent}/// </summary>`);
  output.push(`${indent}public const string ${metaItem.iconName} = @"data";`);
  output.push("");
};

const writeSvgCategory = (metaItems, category) => {
  const output = [];
  output.push("namespace MudBlazor.MaterialDesignIcons;");
  output.push("");
  output.push("public static partial class MaterialDesignIcons");
  output.push("{");
  output.push(`\tpublic static class ${category}`);
  output.push("\t\t{");
  metaItems.forEach((metaItem) => {
    addSvg(output, metaItem, "\t\t");
  });
  output.push("\t\t}");
  output.push("}");
  const sourceFileName = path.join(`MudBlazor.MaterialDesignIcons/MaterialDesignIcons.${category}.cs`);
  fs.writeFileSync(sourceFileName, output.join("\n"));
};

const packageFileName = path.join("node_modules", "@mdi", "svg", "package.json");
const package = loadJsonFile(packageFileName);
console.log(package.version);

const metaFileName = path.join("node_modules", "@mdi", "svg", "meta.json");
const meta = loadJsonFile(metaFileName);
console.log(meta);

const normalIcons = meta
  .filter((item) => !item.name.endsWith("-outline"))
  .map((item) => {
    item.fileName = `${item.name}.svg`;
    item.iconName = SnakeCaseToCamelCase(item.name);
    return item;
  });
writeSvgCategory(normalIcons, "Default");

const outlineIcons = meta
  .filter((item) => item.name.endsWith("-outline"))
  .map((item) => {
    item.fileName = `${item.name}.svg`;
    item.iconName = SnakeCaseToCamelCase(item.name.replace("-outline", ""));
    return item;
  });
writeSvgCategory(outlineIcons, "Outline");
