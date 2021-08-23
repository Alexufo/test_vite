/**
 * @type {import('vite').UserConfig}
 */
import { defineConfig } from "vite";
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
import eslintPlugin from '@nabla/vite-plugin-eslint';


export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },

  plugins: [
    // other plugins...
    // eslintPlugin(),
    crossOriginIsolation()
  ],
  build: {
    polyfillModulePreload: false,
    target: 'esnext',
    cssCodeSplit: false,
    minify: false,
    rollupOptions: {
      output: {
        //entryFileNames: "[name].js",
        //assetFileNames: 'assets/[name][extname]'
      },
    }
  }
});
