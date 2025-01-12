import { defineConfig } from 'vite'
import XMLLoader from 'vite-plugin-xml-loader'

export default defineConfig({
    plugins: [XMLLoader.default()]
});