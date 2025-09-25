import path from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production", // мінімізує код
    entry: "./app/js/src/main.js",
    output: {
        filename: "main.min.js",
        path: path.resolve(__dirname, "app/js")
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
};
