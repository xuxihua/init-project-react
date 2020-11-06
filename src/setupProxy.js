/*
 * @Descripttion: 
 * @Author: xxh
 * @Date: 2020-11-04 19:12:52
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-05 20:02:39
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

console.log(createProxyMiddleware);
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
