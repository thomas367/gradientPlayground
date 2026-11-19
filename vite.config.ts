import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    oxc: {
        plugins: {
            styledComponents: {
                displayName: command === 'serve',
                fileName: false,
                minify: command === 'build',
            },
        },
    },
}));
