/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.test.{ts,tsx}'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: {
                    module: 'CommonJS',
                    moduleResolution: 'Node10',
                    verbatimModuleSyntax: false,
                    esModuleInterop: true,
                },
            },
        ],
    },
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^data/(.*)$': '<rootDir>/src/data/$1',
        '^stores/(.*)$': '<rootDir>/src/stores/$1',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/main.tsx', '!src/**/__tests__/**', '!src/**/*.d.ts'],
    coverageDirectory: 'coverage',
};

export default config;
