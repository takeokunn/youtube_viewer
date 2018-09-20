const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap' }
            ]
        }, {
            test: /\.(woff|woff2|ttf|eot|svg|png|gif|jpg)$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Actions: path.resolve(__dirname, 'src/actions/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            Reducers: path.resolve(__dirname, 'src/reducers/'),
            Sagas: path.resolve(__dirname, 'src/sagas/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Store: path.resolve(__dirname, 'src/store/')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    serve: {
        content: [path.resolve(__dirname, 'public')]
    }
};
