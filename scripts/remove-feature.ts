import {
  CallExpression,
  JsxAttribute,
  JsxSelfClosingElement,
  Project,
  SyntaxKind,
} from 'ts-morph';

const removedFeatureNameArg = process.argv[2]; // example isArticleEnabled
const featureStateArg = process.argv[3]; // example off/on

if (!removedFeatureNameArg) {
  throw new Error('Укажите название флага');
}

if (
  !featureStateArg ||
  (featureStateArg !== 'on' && featureStateArg !== 'off')
) {
  throw new Error('Укажите состояние флага [on|off]');
}

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*{.tsx,.ts}');

const files = project.getSourceFiles();

function isToogleFunction(node: CallExpression) {
  let isToggleFeatures = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

function isToogleComponent(node: JsxSelfClosingElement) {
  const indentifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
  return indentifier?.getText() === toggleComponentName;
}

function replaceToggleFunctions(node: CallExpression) {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );
  if (!objectOptions) return;
  const featureNameProperty = objectOptions.getProperty('name');
  const onFuncProperty = objectOptions.getProperty('on');
  const offFuncProperty = objectOptions.getProperty('off');

  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);
  const onFunction = onFuncProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const offFunction = offFuncProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );

  if (featureName !== removedFeatureNameArg) return;
  if (featureStateArg === 'on' && onFunction) {
    node.replaceWithText(onFunction.getBody().getText());
  }
  if (featureStateArg === 'off' && offFunction) {
    node.replaceWithText(offFunction.getBody().getText());
  }
}

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find((node) => node.getNameNode().getText() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

function replaceComponent(node: JsxSelfClosingElement) {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);
  if (!attributes) return;
  const featureNameProperty = getAttributeNodeByName(attributes, 'name');
  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureNameArg) return;

  const onValue = getReplacedComponent(onAttribute);
  const offValue = getReplacedComponent(offAttribute);

  if (featureStateArg === 'on' && onValue) {
    node.replaceWithText(onValue);
  }
  if (featureStateArg === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
}
let counter = 0;
files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToogleFunction(node)) {
      replaceToggleFunctions(node);
      counter++;
      return;
    }
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToogleComponent(node)
    ) {
      replaceComponent(node);
      counter++;
    }
  });
});

console.log(`Replaced ${counter} functions`);

project.save();
