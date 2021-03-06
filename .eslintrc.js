module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'cypress',
  ],
  rules: {
    "import/no-extraneous-dependencies" : ["error", { devDependencies: true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-array-index-key": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
  },
};
