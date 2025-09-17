<script setup>
useSeoMeta({
  title: 'CatOps Documentation - Complete Server Monitoring Guide',
  description: 'Everything you need to know about CatOps. From quick setup to advanced configurations, comprehensive guides and examples for server monitoring.',
  keywords: 'CatOps documentation, server monitoring guide, setup guide, API documentation, monitoring tutorial',
  author: 'CatOps',
  ogTitle: 'CatOps Documentation - Complete Server Monitoring Guide',
  ogDescription: 'Complete documentation to get you started with CatOps server monitoring. Quick setup to advanced configurations.',
  ogImage: '/images/catops-docs-og.jpg',
  ogUrl: 'https://catops.io/docs',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'CatOps Documentation - Complete Guide',
  twitterDescription: 'Everything you need to know about CatOps server monitoring. Comprehensive guides and examples.',
  twitterImage: '/images/catops-docs-og.jpg',
  robots: 'index, follow',
  canonical: 'https://catops.io/docs'
})

useSchemaOrg([
  {
    '@type': 'TechArticle',
    headline: 'CatOps Documentation - Complete Server Monitoring Guide',
    description: 'Comprehensive documentation for CatOps server monitoring platform',
    author: {
      '@type': 'Organization',
      name: 'CatOps'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CatOps',
      logo: {
        '@type': 'ImageObject',
        url: 'https://catops.io/logo.png'
      }
    },
    datePublished: '2024-01-01',
    dateModified: '2024-01-15'
  }
])
</script>

<template>
    <section class="bg-white dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">Updated</span> <span
                    class="text-sm font-medium">Documentation updated with latest features.</span>
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
                Complete <span class="text-amber-500">documentation</span> <br> to get you started.
            </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Everything you need to know about CatOps. From quick setup to advanced configurations, we've got you covered with comprehensive guides and examples.</p>
            
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#quick-start"
                    class="inline-flex bg-amber-500 justify-center items-center py-2 transition px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900">
                    Quick Start
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#api-reference"
                    class="inline-flex justify-center transition items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-2xl border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    API Reference
                </a>
            </div>

            <!-- Documentation Sections -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
                <!-- Sidebar Navigation -->
                <div class="lg:col-span-1">
                    <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 sticky top-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documentation</h3>
                        <nav class="space-y-2">
                            <a href="#quick-start" class="block px-3 py-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/20 rounded-lg font-medium">Quick Start</a>
                            <a href="#installation" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Installation</a>
                            <a href="#configuration" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Configuration</a>
                            <a href="#monitoring" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Monitoring</a>
                            <a href="#alerts" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Alerts</a>
                            <a href="#api-reference" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">API Reference</a>
                            <a href="#troubleshooting" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Troubleshooting</a>
                            <a href="#examples" class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Examples</a>
                        </nav>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="lg:col-span-3 text-left">
                    <!-- Quick Start Section -->
                    <section id="quick-start" class="mb-12">
                        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">Get CatOps up and running in less than 5 minutes with our simple installation process.</p>
                            
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Install CatOps</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">curl -sfL https://catops.io/install.sh | bash</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">One curl command, zero setup hell. Ultra-lightweight server monitoring tool.</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Quick Start (Local Mode)</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">catops start</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Start monitoring immediately in Local Mode. No configuration required!</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Configure Telegram Bot (Optional)</h3>
                                    <div class="space-y-3">
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">Create Bot & Get Group ID</h4>
                                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Message @BotFather on Telegram: <code>/newbot</code></p>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">catops config set telegram.bot_token YOUR_BOT_TOKEN<br>catops config set telegram.group_id YOUR_GROUP_ID</code>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Get instant alerts via Telegram bot with remote commands.</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Enable Cloud Mode (Optional)</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">catops config set cloud.enabled true<br>catops config set cloud.api_key YOUR_API_KEY</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Enable web dashboard at <a href="https://dash.catops.io" class="text-amber-600 hover:text-amber-700">dash.catops.io</a> for online monitoring.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Installation Section -->
                    <section id="installation" class="mb-12">
                        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Installation</h2>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">Multiple ways to install CatOps on your system.</p>
                            
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">One-Command Installation (Recommended)</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">curl -sfL https://catops.io/install.sh | bash</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">One curl command, zero setup hell. This script will automatically:</p>
                                    <ul class="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                        <li>Download the correct binary for your platform</li>
                                        <li>Make it executable and add to PATH</li>
                                        <li>Create configuration directory</li>
                                        <li>Start monitoring service in Local Mode</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick Installation with Telegram Setup</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">curl -sfL https://catops.io/install.sh | BOT_TOKEN="your_bot_token" GROUP_ID="your_group_id" sh -</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Install with Telegram bot configuration in one command.</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Manual Installation</h3>
                                    <div class="space-y-3">
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">Linux (x86_64)</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">wget https://releases.catops.io/latest/catops-linux-amd64.tar.gz<br>tar -xzf catops-linux-amd64.tar.gz<br>sudo mv catops /usr/local/bin/</code>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">macOS</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">brew install catops</code>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">From Source</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">git clone https://github.com/catops/catops.git && cd catops && go build -o catops ./cmd/catops</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Configuration Section -->
                    <section id="configuration" class="mb-12">
                        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration</h2>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">Configure CatOps to monitor your infrastructure and send alerts.</p>
                            
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick Start</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">catops start</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Start monitoring immediately in Local Mode. No configuration required!</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Telegram Bot Setup</h3>
                                    <div class="space-y-4">
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">1. Create a Telegram Bot</h4>
                                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Message @BotFather on Telegram:</p>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-2">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">/newbot</code>
                                            </div>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">Follow the prompts to create your bot and get the bot token.</p>
                                        </div>
                                        
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">2. Get Your Group ID</h4>
                                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Add your bot to a group, then get the group ID:</p>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">curl https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates</code>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">3. Configure CatOps</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">catops config set telegram.bot_token YOUR_BOT_TOKEN<br>catops config set telegram.group_id YOUR_GROUP_ID</code>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">4. Start with Telegram</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">catops start --telegram</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cloud Mode (Optional)</h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">For advanced features, web dashboard, and team collaboration, enable Cloud Mode:</p>
                                    <div class="space-y-3">
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">1. Get API Key</h4>
                                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Visit <a href="https://dash.catops.io" class="text-blue-600 dark:text-blue-400 hover:underline">dash.catops.io</a> to create an account and get your API key.</p>
                                        </div>
                                        
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">2. Enable Cloud Mode</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">catops config set cloud.enabled true<br>catops config set cloud.api_key YOUR_API_KEY</code>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">3. Start with Cloud</h4>
                                            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                                <code class="text-sm text-gray-800 dark:text-gray-200">catops start --cloud</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- API Reference Section -->
                    <section id="api-reference" class="mb-12">
                        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
                            <p class="text-gray-600 dark:text-gray-400 mb-6">Integrate CatOps with your applications using our REST API.</p>
                            
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Server Status</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">GET /api/v1/status</code>
                                    </div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Returns current server metrics and status.</p>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                        <pre class="text-sm text-gray-800 dark:text-gray-200"><code>{
  "status": "healthy",
  "cpu_usage": 45.2,
  "memory_usage": 67.8,
  "disk_usage": 23.1,
  "uptime": "7d 14h 32m",
  "last_check": "2025-01-21T10:30:00Z"
}</code></pre>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Send Custom Alert</h3>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-3">
                                        <code class="text-sm text-gray-800 dark:text-gray-200">POST /api/v1/alerts</code>
                                    </div>
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                                        <pre class="text-sm text-gray-800 dark:text-gray-200"><code>{
  "title": "Custom Alert",
  "message": "Something important happened",
  "severity": "warning",
  "tags": ["custom", "application"]
}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- Help Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl mb-16">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center mb-8">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Need Help?</h2>
                        <p class="font-light text-gray-500 dark:text-gray-400 md:text-lg">Can't find what you're looking for? We're here to help.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Support</h3>
                            <p class="text-gray-500 dark:text-gray-400 mb-4">Join our community forum for discussions and help from other users.</p>
                            <a href="#" class="text-amber-600 hover:text-amber-700 font-medium">Visit Forum →</a>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
                            <p class="text-gray-500 dark:text-gray-400 mb-4">Get direct help from our support team via email.</p>
                            <a href="mailto:support@catops.io" class="text-amber-600 hover:text-amber-700 font-medium">Contact Support →</a>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                            <p class="text-gray-500 dark:text-gray-400 mb-4">Browse our comprehensive documentation and guides.</p>
                            <a href="#quick-start" class="text-amber-600 hover:text-amber-700 font-medium">Read Docs →</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Ready to start monitoring?</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Follow our quick start guide and have CatOps running in minutes.</p>
                        <a href="https://dash.catops.io/" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">Get Started Now</a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>