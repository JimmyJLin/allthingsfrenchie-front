require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Allthingsfrenchie',
    description: 'Handpicked items inspired by our French Bulldogs & their Furrriends. Dog friendly & human friendly!',
    head: {
      titleTemplate: 'Allthingsfrenchie',
      meta: [
        {name: 'description', content: 'Handpicked items inspired by our French Bulldogs & their Furrriends. Dog friendly & human friendly!'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/allthingsfrenchie-ce237.appspot.com/o/company%2Flogo%2Flogo.png?alt=media&token=8fe25425-9d52-4d46-9dd6-21059bd9bfc0'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Allthingsfrenchie'},
        {property: 'og:description', content: 'Handpicked items inspired by our French Bulldogs & their Furrriends. Dog friendly & human friendly!'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@allthingsfrenchie'},
        {property: 'og:creator', content: '@allthingsfrenchie'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
