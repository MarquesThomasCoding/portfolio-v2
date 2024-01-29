<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'NavBar',
    components: {
        RouterLink,
        RouterView,
    },
    methods: {
        showNavbar() {
            const navbar = document.querySelector('nav');
            navbar.classList.toggle('hidden');
            navbar.classList.toggle('flex');
        }
    }
}
</script>

<template>
    <div class="flex flex-col justify-start items-start w-fit mt-16 max-[600px]:fixed max-[600px]:right-0 max-[600px]:mt-0">
        <div @click="showNavbar()" class="px-5 py-2.5 w-fit cursor-pointer">
            <img src="/imgs/menu.png" alt="menu" style="width:35px; height:25px" />
        </div>
        <nav class="flex-col justify-center items-start w-fit whitespace-nowrap animate-smoothApparition hidden">
            <RouterLink class="py-2.5 px-5 after:absolute after:h-full after:top-0 after:left-0 after:-z-[1] z-[2] after:w-0 after:bg-gray-200 hover:after:w-full hover:text-black relative after:transition-all" :class="{ 'bg-gray-200': $route.path === '/', 'text-black': $route.path === '/' }" to="/">Home</RouterLink>
            <RouterLink class="py-2.5 px-5 after:absolute after:h-full after:top-0 after:left-0 after:-z-[1] z-[2] after:w-0 after:bg-gray-200 hover:after:w-full hover:text-black relative after:transition-all" :class="{ 'bg-gray-200': $route.path === '/my-works', 'text-black': $route.path === '/my-works' }" to="/my-works">My works</RouterLink>
            <RouterLink class="py-2.5 px-5 after:absolute after:h-full after:top-0 after:left-0 after:-z-[1] z-[2] after:w-0 after:bg-gray-200 hover:after:w-full hover:text-black relative after:transition-all" :class="{ 'bg-gray-200': $route.path === '/contact', 'text-black': $route.path === '/contact' }" to="/contact">Contact</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>