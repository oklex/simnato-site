import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'; // TypeScript parser
import pluginReact from 'eslint-plugin-react';

export default [
	{
		// Apply ESLint to JavaScript and TypeScript files
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			globals: globals.browser, // Use browser globals (like window, document)
			parser: tsParser, // Use TypeScript parser for TS/JSX files
			parserOptions: {
				sourceType: 'module', // Enable ES modules
				ecmaFeatures: {
					jsx: true, // Enable JSX since we're using React
				},
			},
		},
		plugins: {
			'@typescript-eslint': tseslint, // TypeScript ESLint plugin
			react: pluginReact, // React plugin
		},
		rules: {
			...pluginJs.configs.recommended.rules, // Apply recommended JS rules
			...tseslint.configs['recommended'].rules, // Apply recommended TS rules
			...pluginReact.configs['recommended'].rules, // Apply recommended React rules

			// Custom rules
			'react/react-in-jsx-scope': 'off', // Not needed for React 17+
			'@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
			'react/prop-types': 'off', // Disable prop-types since you're using TypeScript
		},
	},
];
