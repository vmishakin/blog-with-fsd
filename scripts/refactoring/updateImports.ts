/**
 * @fileoverview add alias @ in all absolute imports
 */
import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths('src/**/*{.tsx,.ts}');

const sourceFiles = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

sourceFiles.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      declaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
