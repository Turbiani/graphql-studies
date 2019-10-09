module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  // add your custom rules here
  rules: {
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ["error", { devDependencies: true, }],
    'no-restricted-syntax': 0,
    'global-require': 0,
    'camelcase': 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'linebreak-style': 0
  },
  globals: {}
}
