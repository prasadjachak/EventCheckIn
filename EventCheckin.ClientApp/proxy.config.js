// https://angular.io/guide/build#proxying-to-a-backend-server

const PROXY_CONFIG = {
  '/api': {
    target: 'https://192.168.0.100:45455',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
    headers : {
      "Connection" : "keep-alive"
    }
    // onProxyReq: (proxyReq, req, res) => {
    //   const cookieMap = {
    //     SID: '',
    //   };
    //   let cookie = '';
    //   for (const key of Object.keys(cookieMap)) {
    //     cookie += `${key}=${cookieMap[key]}; `;
    //   }
    //   proxyReq.setHeader('cookie', cookie);
    // },
  },
};

module.exports = PROXY_CONFIG;
