const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/images',{
      target: 'https://drive.google.com/',
      changeOrigin: true,
      pathRewrite: {'^/images' : ''},
    }),
    proxy('https://drive.google.com/file/d',{
        target: '/images_returned',
        changeOrigin: true
      })
  );
};