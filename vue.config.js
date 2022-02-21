const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const buildPath = process.env.BUILDPATH;
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
