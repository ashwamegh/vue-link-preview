import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
const fileFormats: Record<string, string> = {
    es: 'esm',
    iife: 'min',
    umd: 'umd',
    cjs: 'cjs'
}
export default defineConfig({
    plugins: [vue(), cssInjectedByJsPlugin()],
    resolve: {
        alias: {
            "@/": new URL("./src/", import.meta.url).pathname
        }
    },

    build: {
        cssCodeSplit: true,
        target: "esnext",
        lib: {
            entry: path.resolve(__dirname, "src/VueLinkPreview.vue"),
            name: "VueLinkPreview",
            fileName: (format: string) => `vuelinkpreview.${fileFormats[format]}.js`,
            formats: ["es", "umd", "iife", "cjs"]
        },

        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    }
});
