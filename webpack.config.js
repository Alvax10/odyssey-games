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
    mode: "development",
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
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }],
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'client'
                    }
                }
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