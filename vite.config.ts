import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import * as pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
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
        minify: true,
        // cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es'],
            name: 'TcUniversalNav',
            fileName: `tc-universal-nav`
        },
        outDir: `dist/v${pkg.version.split('.')[0]}`
    }
})
