const rules = require("./webpack.rules");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

rules.push(
  {
    test: /\s?.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" },
      { loader: "postcss-loader" },
    ],
  },
  {
    test: /\.(svg|png|jpg|gif)$/,
    include: [path.resolve(__dirname, "images")],
    type: "asset/inline",
  }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "images"),
          to: path.resolve(__dirname, ".webpack/renderer", "images"),
        },
      ],
    }),
  ],
};
