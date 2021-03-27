const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: {
        "app": path.resolve(__dirname, "src/index.js"),
        "canvas": path.resolve(__dirname, "src/assets/js/canvas.js"),
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            publicPath: 'assets',
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.SourceMapDevToolPlugin({
            exclude: ['app.js', 'index.js'],
        })
    ],
    output: {
        path: path.resolve(__dirname, "build/assets"),
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    }
}

const serverConfig = {
    mode: 'development',
    target: 'node',
    node: {
        __dirname: false,
    },
    entry: {
        "index": path.resolve(__dirname, "index.js"),
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images',
                            name: '[name].[ext]',
                            publicPath: 'assets'
                        },
                    },
                ],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    }
}

module.exports = [serverConfig, clientConfig]