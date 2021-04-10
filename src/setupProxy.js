const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'http://localhost:' + (process.env.SERVER_PORT || 5000),
      target: process.env.SERVER_PROXY || 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};