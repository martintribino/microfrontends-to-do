const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './to-do-react/src/index.tsx',
  entry: {
    app: {
      import: './to-do-react/src/index.tsx',
    }
  },
  cache: false,
  mode: "development",
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
  devServer: {
    port: 3001,
    allowedHosts: "all",
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "todoApp",
      filename: "remoteEntry.js",
      exposes: {
        "./TodoApp": "./to-do-react/src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
