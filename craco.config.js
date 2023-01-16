const path = require('path')
const {when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES} = require('@craco/craco')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {},
  eslint: {},
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {},
  },
  typescript: {
    enableTypeChecking: true, // (default value)
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {},
  devServer: {},
  plugins: [
    {
      plugin: require('autoprefixer'),
    },
  ],
}
