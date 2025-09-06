// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
     build: {
    transpile: ['chart.js',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ],
    
  },
  
  
  compatibilityDate: '2024-04-03',
  

  typescript: {
    shim: false,
    strict: false,
  },
  
  
  ssr: true,
  
  

runtimeConfig: {
    public: {
           apiBase: process.env.API_BASE_URL || 'https://doctors.sy'
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})