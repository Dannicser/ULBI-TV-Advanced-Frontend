import { Project } from "ts-morph"; // работает с абстрактным синтаксическим деревом

const project = new Project();

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles(); // получаем все файлы

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier("@/" + value);
    }
  });
});

function isAbsolute(value: string) {
  const layers = ["app", "pages", "widgets", "features", "entities", "shared"];

  if (layers.some((layer) => value.startsWith(layer))) {
    return true;
  }

  return false;
}

project.save();
