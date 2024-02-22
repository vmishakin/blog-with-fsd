/**
 * @fileoverview add index.ts (public API) in all src/shared/ui components
 */
import path from 'path';
import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths('src/**/*{.tsx,.ts}');

const sourceFiles = project.getSourceFiles();
const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(sharedUiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((dir) => {
  const indexFilePath = path.resolve(dir.getPath(), 'index.ts');
  if (!dir.getSourceFile(indexFilePath)) {
    const sourceCode = `export * from './${dir.getBaseName()}';\n`;
    const file = dir.createSourceFile('index.ts', sourceCode);
    console.log(file.getFilePath());
  }
});

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

sourceFiles.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');
    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = segments.slice(0, 3).join('/');
      declaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
