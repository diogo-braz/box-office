module.exports = {
  plugins: [
    '@typescript-eslint',
    '@stylistic/ts',
  ],
  parser: '@typescript-eslint/parser',
  rules: {

    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/ts/semi': ["error"],
    '@stylistic/ts/space-before-function-paren': ['error'],
  }
};
