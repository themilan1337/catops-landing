<script setup>
useSeoMeta({
  title: 'Contact CatOps - Get Help with Server Monitoring Setup',
  description: 'Have questions about CatOps? Need help with setup? Want to discuss enterprise solutions? Our team is ready to assist you 24/7.',
  keywords: 'contact CatOps, server monitoring support, technical support, enterprise solutions, help desk',
  author: 'CatOps',
  ogTitle: 'Contact CatOps - Get Help with Server Monitoring Setup',
  ogDescription: 'Get in touch with us. We\'d love to hear from you and help with your server monitoring needs.',
  ogImage: '/images/catops-contact-og.jpg',
  ogUrl: 'https://catops.vercel.app/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact CatOps - We\'re Here to Help',
  twitterDescription: 'Have questions about server monitoring? Our team is ready to assist you 24/7.',
  twitterImage: '/images/catops-contact-og.jpg',
  robots: 'index, follow',
  canonical: 'https://catops.vercel.app/contact'
})

useSchemaOrg([
  {
    '@type': 'ContactPage',
    name: 'Contact CatOps',
    description: 'Get in touch with CatOps for server monitoring support and enterprise solutions',
    url: 'https://catops.vercel.app/contact'
  },
  {
    '@type': 'Organization',
    name: 'CatOps',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@catops.vercel.app',
      availableLanguage: 'English'
    }
  }
])
</script>

<template>
    <section class="bg-white dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">24/7</span> <span
                    class="text-sm font-medium">We're here to help you succeed.</span>
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
                Get in <span class="text-amber-500">touch</span> with us. <br> We'd love to hear from you.
            </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Have questions about CatOps? Need help with setup? Want to discuss enterprise solutions? Our team is ready to assist you.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <!-- Contact Form -->
                <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">Send us a message</h2>
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="first-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                <input type="text" id="first-name" name="first-name" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" placeholder="John" required>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                <input type="text" id="last-name" name="last-name" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" placeholder="Doe" required>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" placeholder="john@company.com" required>
                        </div>
                        <div>
                            <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                            <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" placeholder="Your Company">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                            <select id="subject" name="subject" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" required>
                                <option value="">Select a topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="sales">Sales Question</option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-gray-800 dark:text-white" placeholder="Tell us how we can help you..." required></textarea>
                        </div>
                        <button type="submit" class="w-full inline-flex bg-amber-500 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900 transition">
                            Send Message
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <!-- Contact Details -->
                    <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p class="text-gray-500 dark:text-gray-400">hello@catops.vercel.app</p>
                                    <p class="text-gray-500 dark:text-gray-400">support@catops.vercel.app</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                                    <p class="text-gray-500 dark:text-gray-400">San Francisco, CA</p>
                                    <p class="text-gray-500 dark:text-gray-400">United States</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">Response Time</h3>
                                    <p class="text-gray-500 dark:text-gray-400">Within 24 hours</p>
                                    <p class="text-gray-500 dark:text-gray-400">Monday - Friday</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h2>
                        <div class="flex space-x-4">
                            <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl mb-16">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center mb-8">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Common Questions</h2>
                        <p class="font-light text-gray-500 dark:text-gray-400 md:text-lg">Quick answers to questions you might have about contacting us.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">How quickly will you respond?</h3>
                            <p class="text-gray-500 dark:text-gray-400">We typically respond to all inquiries within 24 hours during business days.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do you offer phone support?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Phone support is available for Pro and Enterprise customers. Contact us to schedule a call.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I schedule a demo?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Absolutely! Select "Sales Question" in the form above and mention you'd like a demo.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is technical support free?</h3>
                            <p class="text-gray-500 dark:text-gray-400">Basic support is included with all plans. Priority support is available for paid plans.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Ready to start monitoring?</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Don't wait for issues to find you. Start monitoring your infrastructure today.</p>
                        <a href="https://dash.catops.vercel.app/" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">Get Started Free</a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>