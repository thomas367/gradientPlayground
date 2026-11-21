import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        /**
         * TODO: serve dev over HTTPS (e.g. @vitejs/plugin-basic-ssl) for real-device testing via network IP.
         * Over plain HTTP, crypto.randomUUID() and navigator.clipboard are undefined (insecure context),
         * which breaks add/duplicate layer and "Copy CSS" on mobile. Production over HTTPS is unaffected.
         * 
         */
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
