module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    es6: true,
  },
}
