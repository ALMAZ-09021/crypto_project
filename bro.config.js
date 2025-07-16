const pkg = require("./package");


module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },

  navigations: {
    "smartini_crypto.main": "/smartini_crypto",
    "smartini_crypto.detail": "/smartini_crypto/detail",
    "smartini_crypto.mining": "/smartini_crypto/mining",
    "smartini_crypto.account": "/smartini_crypto/account",
    "smartini_crypto.signin": "/smartini_crypto/signin",
    "smartini_crypto.signup": "/smartini_crypto/signup",
    "smartini_crypto.userspage": "/smartini_crypto/userspage",
    "smartini_crypto.signin.signwithtelegram": "/smartini_crypto/signin/signwithtelegram",
  },
  features: {
    "smartini_crypto": {
    },
  },
  config: {
    "smartini_crypto.api": "https://45.10.244.41:4000/",
    "smartini_crypto.promocode_new_year": "NEWYEAR",
    "smartini_crypto.promocode_admin": "ADMIN",
  },
};
