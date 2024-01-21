<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavBar',
    components: {
        RouterLink,
        RouterView,
    },
}
</script>

<template>
    <div class="flex flex-col justify-center items-start h-screen w-fit">
        <div class="px-5 py-2.5 w-fit">
            <img src="../assets/imgs/menu.png" alt="menu" style="width:35px; height:25px" />
        </div>
        <nav class="flex flex-col justify-center items-start w-fit px-10 py-5 gap-6">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/my-works">My works</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>