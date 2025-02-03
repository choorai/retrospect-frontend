const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // entry point 설정
      webpackConfig.entry = path.resolve(__dirname, 'src/index.tsx');
      
      // output 설정
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
      };

      // historyApiFallback 설정
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        historyApiFallback: true
      };

      return webpackConfig;
    }
  }
}; 