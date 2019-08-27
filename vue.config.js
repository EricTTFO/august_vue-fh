// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: {
      "/apis": {
        //将www.example.com映射为/apis
        target: "http://www.fhcp.com", // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/apis": "" //需要rewrite的,
        }
      }
    }
  }
};
