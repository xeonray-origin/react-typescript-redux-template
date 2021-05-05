const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

const srcPath = subdir => {
  return path.join(__dirname, 'src', subdir);
};

module.exports = {
  mode: 'development',
  entry: {
    index: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@actions': srcPath('actions'),
      '@components': srcPath('components'),
      '@config': srcPath('config'),
      '@reducers': srcPath('reducers'),
      '@jss': srcPath('jss'),
      '@store': srcPath('store'),
      '@routes': srcPath('routes'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  modules: false,
                  useBuiltIns: 'usage',
                  targets: '> 0.5%, last 2 versions, Firefox ESR, not dead',
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: 3,
                  version: '^7.8.0',
                },
              ],
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-optional-chaining'],
              ['@babel/plugin-proposal-nullish-coalescing-operator'],
              ['@babel/plugin-syntax-dynamic-import'],
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // PostCSS
          {
            loader: 'postcss-loader',
            options: {
              precision: 10,
              plugins: [require('autoprefixer')(), require('postcss-calc')()],
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
              sassOptions: {
                precision: 10,
              },
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: [0.65, 0.9],
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: [0.65, 0.9],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      favicon: path.join(__dirname, '/favicon.gif'),
    }),
    new CopyPlugin({ patterns: [{ from: 'static', to: 'static' }] }),
    new Dotenv(),
  ],
  devtool: 'eval-source-map',
  node: {
    fs: 'empty',
  },
};
