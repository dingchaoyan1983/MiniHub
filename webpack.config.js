var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
var src = path.join(__dirname, 'client', 'src');
var dist = path.join(__dirname, 'server', 'public');
var cssLoader = 'css?sourceMap&-minimize';

if (process.env.NODE_ENV === 'production') {
  cssLoader = 'css?-sourceMap&minimize';
}

var config = {
  devtool: 'cheap-monpdule-source-map',
  entry: {
    app: path.join(src, 'index.js'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: dist,
    filename: '[name].[hash].js',
    pathinfo: true,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          cacheDirectory: true
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', cssLoader + '!postcss!sass')
      },
      { 
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({browsers: ['last 2 versions']})],
  debug: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.html'),
      hash: false,
      filename: '../views/index.html',
      inject: 'body',
      favicon: path.join(src, 'favicon.png'),
      minify: {
        collapseWhitespace: false
      }
    }),
    new CleanWebpackPlugin([dist, path.join(dist, '..', 'views', 'index.html')]),
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor']}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].[hash].css', {allChunks: true})
  ],
  devServer: {
    inline: true,
    hot: true
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    },
    sourceMap: false,
    comments: false
  }));
}

module.exports = config;
