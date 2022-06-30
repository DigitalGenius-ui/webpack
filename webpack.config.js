const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    // plugins
    plugins : [
        new HtmlWebpackPlugin({
            title : "Webpack title",
            filename : "index.html",
            template : path.resolve(__dirname, "src/app.html")
        })
    ]
}