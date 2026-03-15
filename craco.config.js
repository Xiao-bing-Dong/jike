const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 与 webpack 平级
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  }
};