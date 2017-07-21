var elixir = require('laravel-elixir');

elixir(function (mix) {
  mix.browserify('./src/app.js');
  mix.scripts([
    './src/vendor.js',
    './src/app.js'
  ], './public/app.min.js', './public/build')
})