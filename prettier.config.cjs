/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // Add semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'all', // Add trailing commas wherever possible (objects, arrays, etc.)
  printWidth: 80, // Maximum line length before wrapping
  tabWidth: 2, // Number of spaces per indentation-level
  useTabs: false, // Use spaces instead of tabs
  arrowParens: 'always', // Always include parentheses around arrow function arguments
  bracketSpacing: true, // Add spaces between brackets in object literals: { foo: bar }
  endOfLine: 'lf', // Use Unix-style line endings (LF)
};
