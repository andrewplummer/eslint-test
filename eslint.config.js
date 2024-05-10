import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'react/require-render-return': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': 'off',
      'react/jsx-uses-vars': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
