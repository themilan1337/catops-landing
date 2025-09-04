<script setup>
const isVideoModalOpen = ref(false)

const openVideoModal = () => {
    isVideoModalOpen.value = true
}

const closeVideoModal = () => {
    isVideoModalOpen.value = false
}

// Close modal on Escape key
onMounted(() => {
    const handleEscape = (event) => {
        if (event.key === 'Escape' && isVideoModalOpen.value) {
            closeVideoModal()
        }
    }
    document.addEventListener('keydown', handleEscape)
    
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})

useSeoMeta({
    title: 'CatOps - AI-Powered Server Monitoring | Real-Time Alerts & Live Stats',
    description: 'CatOps is lightweight AI-powered server monitor that sends real-time alerts and live stats to your Telegram or dashboard in seconds. One curl command, zero setup hell.',
    keywords: 'server monitoring, AI monitoring, real-time alerts, Telegram alerts, server stats, DevOps, infrastructure monitoring, uptime monitoring',
    author: 'CatOps',
    ogTitle: 'CatOps - AI-Powered Server Monitoring | Real-Time Alerts & Live Stats',
    ogDescription: 'Don\'t wait for production to go down. Know before it happens with CatOps AI-powered server monitoring.',
    ogImage: '/images/catops-og.jpg',
    ogUrl: 'https://catops.net',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'CatOps - AI-Powered Server Monitoring',
    twitterDescription: 'Real-time server monitoring with AI-powered alerts. One curl command, zero setup hell.',
    twitterImage: '/images/catops-og.jpg',
    robots: 'index, follow',
    canonical: 'https://catops.net'
})

useSchemaOrg([
    {
        '@type': 'Organization',
        name: 'CatOps',
        url: 'https://catops.net',
        logo: 'https://catops.net/logo.png',
        description: 'AI-powered server monitoring platform',
        sameAs: [
            'https://github.com/catops'
        ]
    },
    {
        '@type': 'WebSite',
        name: 'CatOps',
        url: 'https://catops.net',
        description: 'AI-powered server monitoring that sends real-time alerts and live stats to your Telegram or dashboard in seconds.',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://catops.net/search?q={search_term_string}',
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
            <a href="https://github.com/honley1/moniq.sh"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-zinc-700 bg-zinc-100 rounded-full dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
                aria-label="New: CatOps is now proudly open-source - View on GitHub">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">SECURITY</span> <span
                    class="text-sm font-medium">Enterprise-grade security. Built for compliance.</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>

            <ClientOnly>
                <BlurReveal :delay="0.2" :duration="0.75">
                    <h1
                        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
                        Cut monitoring costs by 70%. Resolve incidents 40% faster with <span class="text-amber-500">AI-powered</span> root-cause analysis.
                    </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400">
                CatOps cuts monitoring costs by 70% while reducing incident MTTR by 40%. AI suggests root-cause, not just alerts. Enterprise-level DataDog alternative with AI.
            </p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <NuxtLink to="/contact"
                    class="inline-flex bg-amber-500 justify-center items-center py-2 transition px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900">
                    Contact Sales
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </NuxtLink>
                <button @click="openVideoModal"
                    class="inline-flex justify-center transition items-center py-2 px-5 text-base font-medium text-center text-zinc-900 rounded-2xl border border-zinc-300 hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                        </path>
                    </svg>
                    Watch video
                </button>
            </div>
            <div class="mt-4 sm:mt-5 lg:mt-6">
                <div class="text-center mb-6 sm:mb-8">
                    <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 tracking-wider uppercase">
                        Trusted by <span class="text-amber-500">Leading</span> AI Startups
                    </h2>
                </div>
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <NuxtImg src="/images/logos/fundmentor.png" alt="FundMentor logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fluensa.png" alt="Fluensa logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/runvex.png" alt="Runvex logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/cotrol.png" alt="Cotrol logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/tabai.png" alt="TabAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/menoai.png" alt="MenoAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/adet.png" alt="Adet logo" format="webp"
                                loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/lattemind.png" alt="LatteMind logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/auarai.png" alt="AuarAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/sereneai.png" alt="SereneAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/reeply.png" alt="Reeply logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/ravenai.png" alt="RavenAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/owlpeer.png" alt="OwlPeer logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fundmentor.png" alt="FundMentor logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/fluensa.png" alt="Fluensa logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/runvex.png" alt="Runvex logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/cotrol.png" alt="Cotrol logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/tabai.png" alt="TabAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/menoai.png" alt="MenoAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/adet.png" alt="Adet logo" format="webp"
                                loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/lattemind.png" alt="LatteMind logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/auarai.png" alt="AuarAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/sereneai.png" alt="SereneAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/reeply.png" alt="Reeply logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/ravenai.png" alt="RavenAI logo"
                                format="webp" loading="lazy" />
                        </div>
                        <div class="slide">
                            <NuxtImg src="/images/logos/owlpeer.png" alt="OwlPeer logo"
                                format="webp" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col overflow-hidden">
                <ContainerScroll>
                    <template #title>
                        <h1 class="text-4xl font-semibold inter text-black dark:text-white">
                            Unleash the power of <br />
                            <span class="mt-1 text-4xl exo text-amber-500 font-bold leading-none md:text-[6rem]">
                                New Era of Monitoring
                            </span>
                        </h1>
                    </template>
                    <template #card>
                        <NuxtImg src="/images/dasboard.jpeg"
                            class="mx-auto h-full rounded-2xl object-cover object-left-top"
                            alt="CatOps Dashboard - AI-powered server monitoring interface" height="720" width="1400"
                            format="webp" loading="lazy" />
                    </template>
                </ContainerScroll>
            </div>
            
            <div class="bg-white dark:bg-black py-24 sm:py-32">
                <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-center text-base/7 font-semibold text-amber-500 dark:text-amber-400 inter">For Enterprise solutions</h2>
                    <p
                        class="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight exo text-balance text-zinc-900 dark:text-white sm:text-5xl">
                        From alerts to answers <br> resolve incidents 40% faster.
                    </p>
                    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div class="relative lg:row-span-2">
                            <div class="absolute inset-px rounded-lg bg-zinc-100 dark:bg-zinc-900 lg:rounded-l-4xl"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white max-lg:text-center">
                                        Mobile friendly
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400 max-lg:text-center">
                                        Receive alerts as a push notifications straight into your mobile device.
                                    </p>
                                </div>
                                <div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div
                                        class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 outline outline-zinc-300/50 dark:outline-white/20">
                                        <NuxtImg src="/images/image.png"
                                            alt="" class="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-zinc-300/50 dark:outline-white/15 lg:rounded-l-4xl">
                            </div>
                        </div>
                        <div class="relative max-lg:row-start-1">
                            <div class="absolute inset-px rounded-lg bg-zinc-100 dark:bg-zinc-900 max-lg:rounded-t-4xl"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white max-lg:text-center">
                                        Performance</p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400 max-lg:text-center">
                                        CatOps uses &lt;1% of your server's CPU. Manage CPU, RAM usage in app or dashboard.
                                    </p>
                                </div>
                                <div
                                    class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                                        alt="" class="w-full max-lg:max-w-xs" />
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-zinc-300/50 dark:outline-white/15 max-lg:rounded-t-4xl">
                            </div>
                        </div>
                        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div class="absolute inset-px rounded-lg bg-zinc-100 dark:bg-zinc-900"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white max-lg:text-center">
                                        Security</p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400 max-lg:text-center">
                                        Thoroughly secured and active layer of protection. Also, we never share your data.
                                    </p>
                                </div>
                                <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                                        alt="" class="h-[min(152px,40cqw)] object-cover" />
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-zinc-300/50 dark:outline-white/15">
                            </div>
                        </div>
                        <div class="relative lg:row-span-2">
                            <div class="absolute inset-px rounded-lg bg-zinc-100 dark:bg-zinc-900 max-lg:rounded-b-4xl lg:rounded-r-4xl">
                            </div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <div class="flex mx-auto items-center justify-center">
                                        <p class="text-lg font-medium tracking-tight text-zinc-900 dark:text-white max-lg:text-center">
                                            Powerful APIs
                                        </p>
                                        <span class="inline-flex items-center ml-4 text-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-amber-500 text-white dark:bg-amber-500 self-center">Enterprise</span>
                                    </div>
                                    <p class="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400 max-lg:text-center">
                                        Seamless integration, real-time data access, and advanced monitoring capabilities.
                                    </p>
                                </div>
                                <div class="relative min-h-120 w-full grow">
                                    <div
                                        class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-zinc-50/90 dark:bg-zinc-900/60 outline outline-zinc-300/30 dark:outline-white/10">
                                        <div class="flex bg-zinc-100 dark:bg-zinc-900 outline outline-zinc-300/20 dark:outline-white/5">
                                            <div class="-mb-px flex text-sm/6 font-medium text-zinc-600 dark:text-zinc-400">
                                                <div
                                                    class="border-r flex border-b border-r-zinc-300/30 dark:border-r-white/10 border-b-zinc-300/50 dark:border-b-white/20 bg-zinc-200/50 dark:bg-white/5 px-4 py-2 text-zinc-900 dark:text-white">
                                                    <svg class="my-auto mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><defs><linearGradient id="vscodeIconsFileTypePython0" x1="-133.268" x2="-133.198" y1="-202.91" y2="-202.84" gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="vscodeIconsFileTypePython1" x1="-133.575" x2="-133.495" y1="-203.203" y2="-203.133" gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><path fill="url(#vscodeIconsFileTypePython0)" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"/><path fill="url(#vscodeIconsFileTypePython1)" d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214z"/></svg>
                                                    main.py
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left">
<pre class="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-x-auto">
  <code class="text-xs">
    <span class="text-purple-600 dark:text-purple-400">import</span> <span class="text-blue-600 dark:text-blue-400">requests</span>

    <span class="text-zinc-700 dark:text-zinc-300">url</span> <span class="text-zinc-600 dark:text-zinc-400">=</span> <span class="text-amber-600 dark:text-amber-300">"https://api.catops.net/"</span>
    
    <span class="text-zinc-700 dark:text-zinc-300">response</span> <span class="text-zinc-600 dark:text-zinc-400">=</span> <span class="text-blue-600 dark:text-blue-400">requests</span><span class="text-zinc-600 dark:text-zinc-400">.</span><span class="text-green-600 dark:text-green-400">get</span><span class="text-zinc-600 dark:text-zinc-400">(</span><span class="text-zinc-700 dark:text-zinc-300">url</span><span class="text-zinc-600 dark:text-zinc-400">)</span>

    <span class="text-purple-600 dark:text-purple-400">if</span> <span class="text-zinc-700 dark:text-zinc-300">response</span><span class="text-zinc-600 dark:text-zinc-400">.</span><span class="text-zinc-700 dark:text-zinc-300">status_code</span> <span class="text-zinc-600 dark:text-zinc-400">==</span> <span class="text-amber-600 dark:text-amber-300">200</span><span class="text-zinc-600 dark:text-zinc-400">:</span>
        <span class="text-zinc-700 dark:text-zinc-300">data</span> <span class="text-zinc-600 dark:text-zinc-400">=</span> <span class="text-zinc-700 dark:text-zinc-300">response</span><span class="text-zinc-600 dark:text-zinc-400">.</span><span class="text-green-600 dark:text-green-400">json</span><span class="text-zinc-600 dark:text-zinc-400">()</span>
        <span class="text-blue-600 dark:text-blue-400">print</span><span class="text-zinc-600 dark:text-zinc-400">(</span><span class="text-amber-600 dark:text-amber-300">"Successful:"</span><span class="text-zinc-600 dark:text-zinc-400">)</span>
        <span class="text-blue-600 dark:text-blue-400">print</span><span class="text-zinc-600 dark:text-zinc-400">(</span><span class="text-zinc-700 dark:text-zinc-300">data</span><span class="text-zinc-600 dark:text-zinc-400">)</span>
    <span class="text-purple-600 dark:text-purple-400">else</span><span class="text-zinc-600 dark:text-zinc-400">:</span>
        <span class="text-blue-600 dark:text-blue-400">print</span><span class="text-zinc-600 dark:text-zinc-400">(</span><span class="text-amber-600 dark:text-amber-300">"Failed!"</span><span class="text-zinc-600 dark:text-zinc-400">)</span>
  </code>
</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-zinc-300/50 dark:outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-zinc-100 dark:bg-zinc-900 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-2xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-zinc-900 dark:text-white">
                            Schedule a demo with us
                        </h2>
                        <p class="mb-6 font-light text-zinc-500 dark:text-zinc-400 md:text-lg">
                            Contact our sales team and try CatOps Platform. No credit card required.</p>
                        <NuxtLink to="contact/"
                            class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">
                        Contact Sales
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </div>
        
        <!-- Video Modal -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="isVideoModalOpen" 
                  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  @click="closeVideoModal">
                <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 scale-95 translate-y-4"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition-all duration-200 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 translate-y-4">
                    <div v-if="isVideoModalOpen" class="relative max-w-4xl mx-auto p-4" @click.stop>
                        <button @click="closeVideoModal" 
                                class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <video 
                             v-if="isVideoModalOpen"
                             class="w-full h-auto rounded-lg shadow-2xl"
                             controls 
                             autoplay
                             preload="none">
                             <source src="/video.mp4" type="video/mp4">
                             Your browser does not support the video tag.
                         </video>
                    </div>
                </Transition>
            </div>
        </Transition>
    </section>
</template>