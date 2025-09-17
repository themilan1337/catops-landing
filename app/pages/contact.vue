<script setup>
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const submitMessage = ref('')

const submitForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  submitStatus.value = ''
  submitMessage.value = ''
  
  try {
    const telegramMessage = `🔔 New Contact Form Submission\n\n` +
      `👤 Name: ${formData.value.firstName} ${formData.value.lastName}\n` +
      `📧 Email: ${formData.value.email}\n` +
      `🏢 Company: ${formData.value.company || 'Not provided'}\n` +
      `📋 Subject: ${formData.value.subject}\n` +
      `💬 Message: ${formData.value.message}`
    
    const response = await $fetch('https://api.telegram.org/bot8481742827:AAHyX1Vt_dMfBA4jMOhaLdsIQqos6OcJR1Y/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        chat_id: '-4873227734',
        text: telegramMessage,
        parse_mode: 'HTML'
      }
    })
    
    if (response.ok) {
      submitStatus.value = 'success'
      submitMessage.value = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      
      // Reset form
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    console.error('Error sending message:', error)
    submitStatus.value = 'error'
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Contact CatOps - Get Help with Server Monitoring Setup',
  description: 'Have questions about CatOps? Need help with setup? Want to discuss enterprise solutions? Our team is ready to assist you 24/7.',
  keywords: 'contact CatOps, server monitoring support, technical support, enterprise solutions, help desk',
  author: 'CatOps',
  ogTitle: 'Contact CatOps - Get Help with Server Monitoring Setup',
  ogDescription: 'Get in touch with us. We\'d love to hear from you and help with your server monitoring needs.',
  ogImage: '/images/catops-contact-og.jpg',
  ogUrl: 'https://catops.io/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact CatOps - We\'re Here to Help',
  twitterDescription: 'Have questions about server monitoring? Our team is ready to assist you 24/7.',
  twitterImage: '/images/catops-contact-og.jpg',
  robots: 'index, follow',
  canonical: 'https://catops.io/contact'
})

useSchemaOrg([
  {
    '@type': 'ContactPage',
    name: 'Contact CatOps',
    description: 'Get in touch with CatOps for server monitoring support and enterprise solutions',
    url: 'https://catops.io/contact'
  },
  {
    '@type': 'Organization',
    name: 'CatOps',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@catops.io',
      availableLanguage: 'English'
    }
  }
])
</script>

<template>
    <section class="bg-white dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-zinc-700 bg-zinc-100 rounded-full dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
                role="alert">
                <span class="text-xs bg-amber-500 rounded-full text-white px-4 py-1.5 mr-3">Welcome!</span> <span
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
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
                Get in <span class="text-amber-500">touch</span> with us. <br> We'd love to hear from you.
            </h1>
                </BlurReveal>
            </ClientOnly>
            <p class="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400">Have questions about CatOps? Need help with setup? Want to discuss enterprise solutions? Our team is ready to assist you.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-1 max-w-xl mx-auto gap-12 mb-16">
                <!-- Contact Form -->
                <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-8">
                    <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-left">Send us a message</h2>
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="first-name" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">First Name</label>
                                <input type="text" id="first-name" name="first-name" v-model="formData.firstName" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" placeholder="John" required>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Last Name</label>
                                <input type="text" id="last-name" name="last-name" v-model="formData.lastName" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" placeholder="Doe" required>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" v-model="formData.email" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" placeholder="john@company.com" required>
                        </div>
                        <div>
                            <label for="company" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Company</label>
                            <input type="text" id="company" name="company" v-model="formData.company" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" placeholder="Your Company">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subject</label>
                            <select id="subject" name="subject" v-model="formData.subject" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" required>
                                <option value="">Select a topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="sales">Sales Question</option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" v-model="formData.message" class="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 dark:bg-zinc-800 dark:text-white" placeholder="Tell us how we can help you..." required></textarea>
                        </div>
                        <button type="submit" :disabled="isSubmitting" class="w-full inline-flex bg-amber-500 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-2xl hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900 transition disabled:opacity-50 disabled:cursor-not-allowed">
                            <span v-if="isSubmitting">Sending...</span>
                            <span v-else>Send Message</span>
                        </button>
                        
                        <!-- Status Messages -->
                        <div v-if="submitStatus" class="mt-4">
                            <div v-if="submitStatus === 'success'" class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                                {{ submitMessage }}
                            </div>
                            <div v-if="submitStatus === 'error'" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                                {{ submitMessage }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- FAQ Section -->
            <section class="bg-white dark:bg-zinc-950 rounded-3xl mb-16">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center mb-8">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-zinc-900 dark:text-white">Common Questions</h2>
                        <p class="font-light text-zinc-500 dark:text-zinc-400 md:text-lg">Quick answers to questions you might have about contacting us.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">How quickly will you respond?</h3>
                            <p class="text-zinc-500 dark:text-zinc-400">We typically respond to all inquiries within a few hours during business days.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Do you offer phone support?</h3>
                            <p class="text-zinc-500 dark:text-zinc-400">24/7 Phone support is available for Enterprise customers. Contact us to schedule a call or video meeting.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Can I schedule a demo?</h3>
                            <p class="text-zinc-500 dark:text-zinc-400">Absolutely! Select "Sales Question" in the form above and mention you'd like a demo.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Is technical support free?</h3>
                            <p class="text-zinc-500 dark:text-zinc-400">Basic discord support is included with free plans. 24/7 Enterprise support is available for paid plans.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="bg-white dark:bg-zinc-900 rounded-3xl">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-zinc-900 dark:text-white">Ready to start monitoring?</h2>
                        <p class="mb-6 font-light text-zinc-500 dark:text-zinc-400 md:text-lg">Don't wait for issues to find you. Start monitoring your infrastructure today.</p>
                        <a href="https://dash.catops.io/" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">Get Started Free</a>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>