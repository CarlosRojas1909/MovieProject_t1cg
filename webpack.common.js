
module.exports = {
    // entry: {
    //     main: './src/index.js',
    //     vendor: './src/vendor.js'
    // },
    entry: './src/index.js', //for only one entry file
    module: {
        rules: [

            {// need this for images
                test: /\.html$/,
                use: ['html-loader']
            },
            {// need this together with html-loaoder for images
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        "plugins": ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
}