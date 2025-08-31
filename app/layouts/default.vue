<template>
  <div class="min-h-screen flex flex-col">
    <Navbar>
      <template #default="{ visible }">
        <NavBody :visible="visible">
          <NavbarLogo />
          <NavItems :items="navItems" @item-click="closeMenu" />
          <NavbarButton to="https://dash.catops.vercel.app/" variant="primary" class="!rounded-full !px-8">
            Get Started
          </NavbarButton>
        </NavBody>

        <MobileNav :visible="visible">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle :is-open="isMenuOpen" @click="toggleMenu" />
          </MobileNavHeader>

          <MobileNavMenu :is-open="isMenuOpen" @close="closeMenu">
            <NuxtLink v-for="(item, idx) in navItems" :key="`mobile-link-${idx}`" :to="item.link"
              class="w-full px-4 py-2 text-neutral-600 hover:bg-gray-100 rounded-md" @click="closeMenu">
              {{ item.name }}
            </NuxtLink>

            <NavbarButton to="https://dash.catops.vercel.app/" variant="dark" class="w-full mt-4 !rounded-full !px-8" @click="closeMenu">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </template>
    </Navbar>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-black mt-auto">
      <div class="mx-auto max-w-screen-xl text-center">
        <a href="#" class="flex justify-center items-center exo text-2xl font-semibold text-amber-500 dark:text-amber-500">
          CatOps    
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">CatOps is AI server monitor that sends alerts and live stats to your Telegram or dashboard in seconds. <br> One curl command, zero setup hell.</p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">CatOps™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MobileNav from '~/components/MobileNav.vue'
import MobileNavHeader from '~/components/MobileNavHeader.vue'
import MobileNavMenu from '~/components/MobileNavMenu.vue'
import MobileNavToggle from '~/components/MobileNavToggle.vue'
import Navbar from '~/components/Navbar.vue'
import NavbarButton from '~/components/NavbarButton.vue'
import NavbarLogo from '~/components/NavbarLogo.vue'
import NavBody from '~/components/NavBody.vue'
import NavItems from '~/components/NavItems.vue'

const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function closeMenu() {
  isMenuOpen.value = false
}

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Docs', link: '/docs' },
  { name: 'Contact', link: '/contact' },
]

  defineProps({
    title: String,
  })

  const headerRef = ref(null)
  const logoRef = ref(null)
  const navLinksRef = ref(null)
  const actionsRef = ref(null)

    const animateElements = () => {
      const elements = [logoRef, navLinksRef, actionsRef]

      elements.forEach((elementRef) => {
        if (elementRef.value) {
          elementRef.value.style.opacity = '0'
          elementRef.value.style.transition = 'opacity 1s ease-out'
          
          setTimeout(() => {
            elementRef.value.style.opacity = '1'
          }, 100)
        }
      })
    }


  // Run animations on mount
  onMounted(() => {
    // Initialize Preline dropdown functionality
    if (typeof window !== 'undefined' && window.HSDropdown) {
      window.HSDropdown.autoInit()
    }
    
    // Initialize Preline collapse functionality for mobile menu
    if (typeof window !== 'undefined' && window.HSCollapse) {
      window.HSCollapse.autoInit()
    }

    animateElements()
  })
</script>

<style scoped>
  .dropdown-wrapper {
    /* Ensure dropdown positioning works correctly with animations */
    transform: translateZ(0);
  }
  
  /* Responsive improvements */
  @media (max-width: 640px) {
    .questrial {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    .questrial {
      font-size: 1rem;
    }
  }
</style>