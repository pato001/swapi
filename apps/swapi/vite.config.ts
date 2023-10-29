/// <reference types='vitest' />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import FontsPlugin from 'unplugin-fonts/vite'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/swapi',
  server: {
    port: 4200,
    host: 'localhost'
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    FontsPlugin({
      // Custom fonts.
      custom: {
        /**
         * Fonts families lists
         */
        families: [
          {
            /**
             * Name of the font family.
             */
            name: 'StarWarsFont',
            /**
             * Local name of the font. Used to add `src: local()` to `@font-rule`.
             */
            local: 'StarWarsFont',
            /**
             * Regex(es) of font files to import. The names of the files will
             * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
             */
            src: './src/fonts/*.ttf'

            /**
             * This function allow you to transform the font object before it is used
             * to generate the `@font-rule` and head tags.
             */
            // transform(font) {
            //   if (font.basename === 'StarJedi-DGRW-Bold') {
            //     // update the font weight
            //     font.weight = 700
            //   }

            //   // we can also return null to skip the font
            //   return font
            // }
          }
        ],

        /**
         * Defines the default `font-display` value used for the generated
         * `@font-rule` classes.
         */
        display: 'auto',

        /**
         * Using `<link rel="preload">` will trigger a request for the WebFont
         * early in the critical rendering path, without having to wait for the
         * CSSOM to be created.
         */
        preload: true,

        /**
         * Using `<link rel="prefetch">` is intended for prefetching resources
         * that will be used in the next navigation/page load
         * (e.g. when you go to the next page)
         *
         * Note: this can not be used with `preload`
         */
        prefetch: false,

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend'
      }
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
