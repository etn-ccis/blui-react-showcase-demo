module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    parser: '@typescript-eslint/parser',
    extends: ['@brightlayer-ui/eslint-config/tsx'],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'jest.config.ts', 'vite.config.ts'],
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['react-refresh'],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'no-empty-function': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: [
                    'classProperty',
                    'objectLiteralProperty',
                    'typeProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod',
                    'accessor',
                    'enumMember',
                ],
                format: null,
                modifiers: ['requiresQuotes'],
            },
        ],
    },
};

