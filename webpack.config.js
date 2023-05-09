const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");

if (dev) {
    liveServer.start({
        root: "./",
        file: "client/index.html",
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
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'assets/[hash].[ext]' },
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