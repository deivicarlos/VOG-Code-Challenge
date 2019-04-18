module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:jsx-control-statements/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'jsx-control-statements'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
