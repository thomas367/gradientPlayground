import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
    },

    // JavaScript recommended rules
    {
        files: ['**/*.{js,mjs,cjs}'],
        ...js.configs.recommended,
    },

    // TypeScript recommended rules
    ...tseslint.configs.recommended,

    // React
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            ...reactHooks.configs.flat.recommended.rules,
        },
    },

    // Node.js configuration files
    {
        files: ['*.config.js', '*.config.ts'],
        languageOptions: {
            globals: globals.node,
        },
    },

    // Disable formatting rules that conflict with Prettier
    prettier,
);
