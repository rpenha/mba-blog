import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: "terser",
        terserOptions: {
            maxWorkers: 16,
            compress: true
        },
        rollupOptions: {
            output: {
                compact: true,
                manualChunks: {
                    react: [
                        "react",
                        "react-dom",
                        "react-router-dom",
                        "react-helmet-async"
                    ],
                    contentful: [
                        "contentful"
                    ],
                    rendering: [
                        "@contentful/rich-text-react-renderer",
                        "@contentful/rich-text-types"
                    ],
                    fontawesome: [
                        "@fortawesome/fontawesome-svg-core",
                        "@fortawesome/free-solid-svg-icons",
                        "@fortawesome/react-fontawesome"
                    ]
                }
            }
        }
    },
    plugins: [
        react(),
        pluginPurgeCss()
    ]
})
