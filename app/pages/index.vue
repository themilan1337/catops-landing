<script setup>
useSeoMeta({
  title: 'CatOps - AI-Powered Server Monitoring | Real-Time Alerts & Live Stats',
  description: 'CatOps is lightweight AI-powered server monitor that sends real-time alerts and live stats to your Telegram or dashboard in seconds. One curl command, zero setup hell.',
  keywords: 'server monitoring, AI monitoring, real-time alerts, Telegram alerts, server stats, DevOps, infrastructure monitoring, uptime monitoring',
  author: 'CatOps',
  ogTitle: 'CatOps - AI-Powered Server Monitoring | Real-Time Alerts & Live Stats',
  ogDescription: 'Don\'t wait for production to go down. Know before it happens with CatOps AI-powered server monitoring.',
  ogImage: '/images/catops-og.jpg',
  ogUrl: 'https://catops.vercel.app',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'CatOps - AI-Powered Server Monitoring',
  twitterDescription: 'Real-time server monitoring with AI-powered alerts. One curl command, zero setup hell.',
  twitterImage: '/images/catops-og.jpg',
  robots: 'index, follow',
  canonical: 'https://catops.vercel.app'
})

useSchemaOrg([
  {
    '@type': 'Organization',
    name: 'CatOps',
    url: 'https://catops.vercel.app',
    logo: 'https://catops.vercel.app/logo.png',
    description: 'AI-powered server monitoring platform',
    sameAs: [
      'https://github.com/catops'
    ]
  },
  {
    '@type': 'WebSite',
    name: 'CatOps',
    url: 'https://catops.vercel.app',
    description: 'AI-powered server monitoring that sends real-time alerts and live stats to your Telegram or dashboard in seconds.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://catops.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'SoftwareApplication',
    name: 'CatOps',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux, macOS, Windows',
    description: 'AI-powered server monitoring with real-time alerts',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  }
])
</script>

<template>
    <section class="bg-white dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="https://github.com/catops/catops" 
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="New: CatOps is now proudly open-source - View on GitHub">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span
                    class="text-sm font-medium">Now we are proudly open-source.</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
            
            <ClientOnly>
                <BlurReveal
                :delay="0.2"
                :duration="0.75"
                >
                <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Don’t wait for production to go down. <br> Know <span class="text-amber-500">before</span> it happens.
            </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">CatOps is
                lightweight AI-powered server monitor that sends real-time alerts and live stats to your Telegram or
                dashboard in seconds. One curl command, zero setup hell.</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="https://dash.catops.vercel.app/"
                    class="inline-flex bg-amber-500 justify-center items-center py-2 transition px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900">
                    Get Started
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#"
                    class="inline-flex justify-center transition items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-2xl border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                        </path>
                    </svg>
                    Watch video
                </a>
            </div>
            <div class="mt-4 sm:mt-5 lg:mt-6">
                <div class="text-center mb-6 sm:mb-8">
                    <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 tracking-wider uppercase">
                        Trusted by <span class="text-amber-500">Leading</span> AI Startups
                    </h2>
                </div>
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <NuxtImg src="/images/logos/fundmentor.png" alt="FundMentor logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fluensa.png" alt="Fluensa logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/runvex.png" alt="Runvex logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/cotrol.png" alt="Cotrol logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/tabai.png" alt="TabAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/menoai.png" alt="MenoAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/adet.png" alt="Adet logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/lattemind.png" alt="LatteMind logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/auarai.png" alt="AuarAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/sereneai.png" alt="SereneAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/reeply.png" alt="Reeply logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/ravenai.png" alt="RavenAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/owlpeer.png" alt="OwlPeer logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fundmentor.png" alt="FundMentor logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fluensa.png" alt="Fluensa logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/runvex.png" alt="Runvex logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/cotrol.png" alt="Cotrol logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/tabai.png" alt="TabAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/menoai.png" alt="MenoAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/adet.png" alt="Adet logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/lattemind.png" alt="LatteMind logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/auarai.png" alt="AuarAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/sereneai.png" alt="SereneAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/reeply.png" alt="Reeply logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/ravenai.png" alt="RavenAI logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/owlpeer.png" alt="OwlPeer logo" width="120" height="60" format="webp" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col overflow-hidden">
                <ContainerScroll>
                    <template #title>
                        <h1 class="text-4xl font-semibold text-black dark:text-white">
                            Unleash the power of <br />
                            <span class="mt-1 text-4xl inter text-amber-500 font-bold leading-none md:text-[6rem]">
                                New Era of Monitoring
                            </span>
                        </h1>
                    </template>
                    <template #card>
                        <NuxtImg src="/images/dasboard.jpeg" class="mx-auto h-full rounded-2xl object-cover object-left-top"
                            alt="CatOps Dashboard - AI-powered server monitoring interface" height="720" width="1400" format="webp" loading="lazy" />
                    </template>
                </ContainerScroll>
            </div>
            <section class="bg-white dark:bg-zinc-950 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try CatOps Platform for 30 days. No credit card required.</p>
                        <a href="#" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">Free trial for 30 days</a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>