const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3005/',
  },
  devServer: {
    port: 3005,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader"],
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host_app',
      remotes: {
        react_module: 'react_module@http://localhost:3010/remoteEntry.js',
        solidjs_module: 'solidjs_module@http://localhost:3011/remoteEntry.js'
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
