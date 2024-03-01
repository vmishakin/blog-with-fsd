import { CallExpression, Project, SyntaxKind } from 'ts-morph';

const removedFeatureNameArg = process.argv[2]; // example isArticleEnabled
const featureStateArg = process.argv[3]; // example off/on

if (!removedFeatureNameArg) {
  throw new Error('Укажите название флага');
}

if (!featureStateArg || (featureStateArg !== 'on' && featureStateArg !== 'off')) {
  throw new Error('Укажите состояние флага [on|off]');
}

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*{.tsx,.ts}');

const files = project.getSourceFiles();

function isToogleFunction(node: CallExpression) {
  let isToggleFeatures = false;
  node.forEachChild((child) => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToogleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
      if (!objectOptions) return;
      const featureNameProperty = objectOptions.getProperty('name');
      const onFuncProperty = objectOptions.getProperty('on');
      const offFuncProperty = objectOptions.getProperty('off');

      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);
      const onFunction = onFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFuncProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

      if (featureName !== removedFeatureNameArg) return;
      if (featureStateArg === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }
      if (featureStateArg === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
