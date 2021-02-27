// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'max-len': ['error', { code: 140 }],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
  ignorePatterns: ['*.spec.ts', '*.test.ts', 'node_modules', 'packages', '*local.*', 'dist', '*.e2e-spec.*'],
}
