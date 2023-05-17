const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3010/',
  },
  devServer: {
    port: 3010,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
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
          modules: {
            auto: true,
            localIdentName: 'reactjs--[hash:base64:5]',
          },
        }
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_module',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactModule': './src/bootstrap.tsx'
      },
      remotes: {
        solidjs_module: 'solidjs_module@http://localhost:3011/remoteEntry.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
