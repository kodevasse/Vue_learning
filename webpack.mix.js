let mix = require('laravel-mix');

mix
  .js('src/app.js', 'dist/')
  .vue()
  .sass('src/app.scss', 'dist/');
