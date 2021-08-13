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
    eslintPlugin(),
    crossOriginIsolation()
  ],

  build: {
    //target: 'es2015',
    //cssCodeSplit: false,
    //minify: 'terser',
    rollupOptions: {
      output: {
        //entryFileNames: "[name].js",
        //assetFileNames: 'assets/[name][extname]'
      },
    }
  }
});
