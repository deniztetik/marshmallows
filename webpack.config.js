const HtmlWebpackPlugin = require('html-webpack-plugin');

const getConfig = (env) => {
  const isProd = env && env.production;
  const isDev = !isProd;

  const config = {
    entry: './project/frontend/src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/project/frontend/static/frontend'
    },
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };

  if (isDev) {
    config.plugins = [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ];
  }

  return config;
}
module.exports = getConfig;
