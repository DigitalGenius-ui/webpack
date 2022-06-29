const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : "development",
    entry : {
        main : path.resolve(__dirname, "src/app.js")
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    //loader for css files

    // plugins
    plugins : [
        new HtmlWebpackPlugin({
            title : "Webpack title",
            filename : "index.html",
            template : path.resolve(__dirname, "src/app.html")
        })
    ]
}