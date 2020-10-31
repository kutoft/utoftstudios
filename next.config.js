const withPWA = require('next-pwa')

module.exports = withPWA({
  distDir: 'build',
  pwa: {
    dest: 'public',
  },
  images: {
    domains: [
      'utoftstudiosa23d31d64fee45d6bf901629fbfed402203640-dev.s3.amazonaws.com',
    ],
  },
})
