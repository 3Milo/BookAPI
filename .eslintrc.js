module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
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
  ],
  rules: {
    "linebreak-style": [2, "windows"],
    "object-curly-spacing": 0,
    "spaced-comment": 0,
    "comma-dangle": 0,
    "indent": [2, "tab"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "prefer-template": 0,
  },
};
