// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'EGA Cake',
            htmlAttrs: {
              lang: 'en'
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: '' },
              { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
              { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
              { 
                rel: 'stylesheet', 
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' ,
                integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
                crossorigin: 'anonymous', 
                referrerpolicy: 'no-referrer'
              },
              {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
              }
            ],
            script: [
              {
                tagPosition: 'bodyClose',
                src: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
              }
            ]
        },
    },
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-swiper'
    ],
})
