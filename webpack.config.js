const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");

if (dev) {
    liveServer.start({
        root: "./",
        file: "dist/index.html",
        port: 3010,
    });
}

module.exports = {
    watch: dev,
    mode: process.env.NODE_ENV,
    entry: "./client/index.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".css"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};