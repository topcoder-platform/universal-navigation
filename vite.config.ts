import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import * as pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig((props) => {
    // loads env variables based on the build mode (production|dev)
    // loads only variables prefixed with APP_
    const env = loadEnv(props.mode, process.cwd(), 'APP_')

    const outputFileName = 'tc-universal-nav'

    return {
        define: {
            BUILD_IS_PROD: props.mode === 'production',
        },
        plugins: [
            cssInjectedByJsPlugin(),
            svelte(),
        ],
        resolve: {
            alias: {
                assets: resolve(__dirname, './src/assets'),
                lib: resolve(__dirname, './src/lib'),
            }
        },
        build: {

            // there are 3 separate build processes
            // running in parallel
            // need to keep the output dir contents intact
            // otherwise the last build process will remove the other outputs
            emptyOutDir: false,
            // this doesn't remove whitespaces
            minify: true,
            lib: {
                entry: resolve(__dirname, `src/main.ts`),
                formats: ['es'],
                fileName: outputFileName
            },
            outDir: `dist/v${pkg.version.split('.')[0]}`,
            rollupOptions: {
                output: {
                    manualChunks: () => `${outputFileName}.js`
                },
            },
        },
    }
})
