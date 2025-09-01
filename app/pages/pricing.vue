<script setup>
useSeoMeta({
  title: 'CatOps Pricing - Simple & Transparent Server Monitoring Plans',
  description: 'Choose the perfect CatOps plan for your monitoring needs. Start with our free tier and scale as you grow. No hidden fees, cancel anytime.',
  keywords: 'server monitoring pricing, monitoring plans, DevOps pricing, infrastructure monitoring cost, uptime monitoring plans',
  author: 'CatOps',
  ogTitle: 'CatOps Pricing - Simple & Transparent Server Monitoring Plans',
  ogDescription: 'Simple, transparent pricing for every team size. Start with our free tier and scale as you grow.',
  ogImage: '/images/catops-pricing-og.jpg',
  ogUrl: 'https://catops.net/pricing',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'CatOps Pricing - Simple & Transparent Plans',
  twitterDescription: 'Choose the perfect plan for your monitoring needs. Start free, scale as you grow.',
  twitterImage: '/images/catops-pricing-og.jpg',
  robots: 'index, follow',
  canonical: 'https://catops.net/pricing'
})

useSchemaOrg([
  {
    '@type': 'Product',
    name: 'CatOps Server Monitoring',
    description: 'AI-powered server monitoring with real-time alerts',
    brand: {
      '@type': 'Brand',
      name: 'CatOps'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Plan',
        price: '0',
        priceCurrency: 'USD',
        availability: 'InStock',
        description: 'Perfect for small projects and personal use'
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '29',
        priceCurrency: 'USD',
        availability: 'InStock',
        description: 'Ideal for growing teams and businesses'
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Plan',
        price: '99',
        priceCurrency: 'USD',
        availability: 'InStock',
        description: 'For large organizations with advanced needs'
      }
    ]
  }
])
</script>

<template>
    <section class="bg-white dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">30% Off</span> <span
                    class="text-sm font-medium">Limited time offer for early adopters.</span>
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
                Simple, transparent <span class="text-amber-500">pricing</span> <br> for every team size.
            </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Choose the perfect plan for your monitoring needs. Start with our free tier and scale as you grow. No hidden fees, cancel anytime.</p>
            
            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Starter Plan -->
                <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Starter</h3>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$0</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul class="text-left space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Up to 5 servers</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Basic monitoring</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Telegram alerts</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Community support</span>
                        </li>
                    </ul>
                    <a href="https://dash.catops.net/" class="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-2xl border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition">
                        Get Started Free
                    </a>
                </div>

                <!-- Pro Plan -->
                <div class="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 rounded-3xl p-8 text-center relative">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pro</h3>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$29</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul class="text-left space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Up to 50 servers</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Advanced monitoring</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Multi-channel alerts</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Priority support</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Custom dashboards</span>
                        </li>
                    </ul>
                    <a href="https://dash.catops.net/" class="w-full inline-flex bg-amber-500 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900 transition">
                        Start Pro Trial
                    </a>
                </div>

                <!-- Enterprise Plan -->
                <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">Custom</span>
                    </div>
                    <ul class="text-left space-y-3 mb-8">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Unlimited servers</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Enterprise monitoring</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">White-label solution</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">Dedicated support</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 dark:text-gray-300">SLA guarantee</span>
                        </li>
                    </ul>
                    <a href="#" class="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-2xl border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition">
                        Contact Sales
                    </a>
                </div>
            </div>

            <!-- FAQ Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl mb-16">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center mb-8">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                        <p class="font-light text-gray-500 dark:text-gray-400 md:text-lg">Everything you need to know about our pricing and plans.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I change plans anytime?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is there a free trial?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Yes, all paid plans come with a 30-day free trial. No credit card required to start.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">What payment methods do you accept?</h3>
                            <p class="text-gray-500 dark:text-gray-400">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do you offer discounts for nonprofits?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Yes, we offer special pricing for nonprofits and educational institutions. Contact us for details.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Ready to get started?</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Join thousands of developers who trust CatOps to monitor their infrastructure.</p>
                        <a href="https://dash.catops.net/" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">Start Free Trial</a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>