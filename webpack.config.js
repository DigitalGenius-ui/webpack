const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode : "development",
    entry : {
        main : path.resolve(__dirname, "src/app.js")
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js",
        clean : true,
        //to write the name of photo itself.
        assetModuleFilename : "[name][ext]"
    },
    //loader for css files
    devtool : "source-map",
    devServer : {
        watchFiles : ["src/**/*"],
        port : 3000,
        //when the code is compiled i want the browser to open.
        open : true,
        //when i changed something in my files, I want to be compiled automatically.
        hot : true,
        compress : true,
        historyApiFallback : true,
    },
    module : {
        rules: [
            // css part 
            {
              test: /\.(sass|scss|css)$/,
              use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            // babel part 
            //babel is to let the app opens in older browsers.
            //npm i -D babel-loader @babel/core @babel/preset-env
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            // image file part 
            {
                test: /\.(svg|eot|woff|woff2|ttf|png|jpg|jpeg)$/,
                exclude : /node_modules/,
                loader:'file-loader',
                options : {
                    outputPath : 'fonts',
                }
            }
        ]
    },
    // plugins
    plugins : [
        new HtmlWebpackPlugin({
            title : "Webpack title",
            filename : "index.html",
            template : path.resolve(__dirname, "src/app.html")
        }),
        new MiniCssExtractPlugin(),
    ]
}