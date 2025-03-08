import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore build and other generated directories
  {
    ignores: ['**/.next/**', '**/node_modules/**', '**/public/**'],
  },
  ...compat.extends('next/core-web-vitals'), // Extend Next.js core-web-vitals
  {
    plugins: {
      prettier: prettierPlugin, // Add Prettier plugin
    },
    rules: {
      ...prettierConfig.rules, // Include Prettier recommended rules
      'no-console': ['error', { allow: ['error'] }], // Your custom rule
    },
  },
];

export default eslintConfig;
