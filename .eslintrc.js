module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended', 
    'airbnb', 
    'plugin:i18next/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'cypress/tsconfig.json']
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'fsd-tools-mishakin', 'unused-imports'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.jsx', '.tsx'] },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'fsd-tools-mishakin/path-checker': ['error', { alias: '@' }],
    'fsd-tools-mishakin/public-api-imports': ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
    }],
    'fsd-tools-mishakin/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
    }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
