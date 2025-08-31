import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: true, // Enable SSR for better SEO
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://dash.catops.io' }
      ]
    }
  },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/critters'
  ],
  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  site: {
    url: 'https://catops.io',
    name: 'CatOps',
    description: 'AI-powered server monitoring that sends real-time alerts and live stats to your Telegram or dashboard in seconds. One curl command, zero setup hell.',
    defaultLocale: 'en'
  },
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  experimental: {
    payloadExtraction: false
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    }
  },
});