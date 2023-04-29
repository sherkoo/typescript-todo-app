const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "client"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "client"),
    compress: true,
    port: 8000,
  },
};
