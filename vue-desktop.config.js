const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const buildPath = '/home/vagrant/workspace/newgit/abruzzo/public/crud-vue-desktop/dist';
//const buildPath = 'dist'
module.exports = {
    //publicPath : '/my-app/',
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
                        //to: buildPath,
                        //filter: ['.*']
                    }
                ]

            })
        ]
    }
}
