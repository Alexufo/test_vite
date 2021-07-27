/**
 * @type {import('vite').UserConfig}
 */

import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default {
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  plugins: [
    // other plugins...
    crossOriginIsolation()
  ],

  build: {

    cssCodeSplit: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: 'assets/[name][extname]'
      },
    }
  }
};

