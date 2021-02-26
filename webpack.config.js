const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// const isProd = process.env.NODE_ENV === 'production';

const source_folder = 'src';
const project_folder = 'build';

// const filename = (path, ext) => !isProd ? `${path}/[name].bundle.${ext}` : `${path}[name].bundle.[hash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, source_folder),
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, project_folder),
        filename: 'js/index.js'
    },
    // devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, source_folder, "img"),
                    to: path.resolve(__dirname, project_folder, "img"),
                },
                {
                    from: path.resolve(__dirname, source_folder, "fonts"),
                    to: path.resolve(__dirname, project_folder, "fonts"),
                },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
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
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline',
            }
        ],
    },
}
