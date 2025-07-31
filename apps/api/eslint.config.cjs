const eslintPluginTs = require('@typescript-eslint/eslint-plugin');
const parserTs = require('@typescript-eslint/parser');
const pluginImport = require('eslint-plugin-import');
const pluginPrettier = require('eslint-plugin-prettier');
const pluginJest = require('eslint-plugin-jest');
const pluginSecurity = require('eslint-plugin-security');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        require: true,
        module: true,
        __dirname: true,
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      import: pluginImport,
      prettier: pluginPrettier,
      security: pluginSecurity,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'warn',

      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-empty-function': ['error', { allow: ['constructors'] }],

      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],

      'security/detect-object-injection': 'off',
      'security/detect-unsafe-regex': 'warn',
      'security/detect-child-process': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-non-literal-require': 'warn',

      'prettier/prettier': ['error'],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      jest: pluginJest,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
    },
  },
];
