const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

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

const writeSvg = (output, metaItem, indent = "\t") => {
  const regexSvgPath = /<path(.*?)\/\>/g;
  const regexReplaceQuotes = /\"/g;
  const svgFileName = path.join("node_modules", "@mdi", "svg", "svg", metaItem.fileName);
  const svgData = fs.readFileSync(svgFileName, "utf-8");
  if ((m = regexSvgPath.exec(svgData)) !== null) {
    const pathData = m[0].replace(regexReplaceQuotes, '""');

    output.push(`${indent}/// <summary>`);
    output.push(`${indent}/// <b>Codepoint: </b>${metaItem.codepoint}<br/>`);
    output.push(`${indent}/// <b>Name: </b>mdi-${metaItem.name}<br/>`);
    output.push(`${indent}/// <b>Author: </b>${metaItem.author}<br/>`);
    output.push(`${indent}/// </summary>`);
    output.push(`${indent}public const string ${metaItem.iconName} = @"${pathData}";`);
    output.push("");
  } else {
    console.error(`Could not extract svg path from "${svgFileName}"`);
  }
};

const writeSvgCategory = (metaItems, category) => {
  console.info(`Writing ${metaItems.length} ${category} icons...`);
  const output = [];
  output.push("namespace MudBlazor.MaterialDesignIcons;");
  output.push("");
  output.push("public static partial class MaterialDesignIcons");
  output.push("{");
  output.push(`\tpublic static class ${category}`);
  output.push("\t\t{");
  for (var metaItem of metaItems) {
    writeSvg(output, metaItem, "\t\t");
  }
  output.push("\t\t}");
  output.push("}");
  const sourceFileName = path.join(`MudBlazor.MaterialDesignIcons/MaterialDesignIcons.${category}.cs`);
  fs.writeFileSync(sourceFileName, output.join("\n"));
};

const packageFileName = path.join("node_modules", "@mdi", "svg", "package.json");
const package = loadJsonFile(packageFileName);
console.info(`Material Design Icon v${package.version}`);

const metaFileName = path.join("node_modules", "@mdi", "svg", "meta.json");
const meta = loadJsonFile(metaFileName);

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