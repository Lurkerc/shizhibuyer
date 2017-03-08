module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/less/components/pageFadeIn.less',
      lang: 'less'
    },
    {
      src: '~assets/less/components/resetStyle.less',
      lang: 'less'
    }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41bdf7' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    filenames: {
      css: 'app.min.css',
      vendor: 'vendor.min.js',
      app: 'app.min.js'
    }
  }
}
