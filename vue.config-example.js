/**
 * vue config file example
 * @type {path.PlatformPath | path}
 */

const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// insert absolute path to publish projects
const buildPath = 'dist';
module.exports = {
    outputDir : buildPath,
    filenameHashing : false,
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [
            // copy custom static assets
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'static'),
                    }
                ]

            })
        ]
    }
}
