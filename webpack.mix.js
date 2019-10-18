const LaravelMix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// Mix Extensions
require('laravel-mix-polyfill');

/*
 *--------------------------------------------------------------------------
 * Mix Asset Management
 *--------------------------------------------------------------------------
 *
 * Mix provides a clean, fluent API for defining some Webpack build steps
 * for your Laravel application. By default, we are compiling the Sass
 * file for the application as well as bundling up all the JS files.
 *
 */

LaravelMix
  .webpackConfig({
    plugins: [
      new LiveReloadPlugin()
    ]
  })
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')
    ]
  })
  .polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: {
      "firefox": "50",
      "ie": "11"
    }
  })

  .sass('resources/sass/app.scss', 'public/css')
  .js('resources/js/app.js', 'public/js')

  .extract()
  .version()
  .sourceMaps(true, 'source-map')
