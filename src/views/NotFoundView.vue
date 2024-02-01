<script>

export default {
    name: 'NotFoundView',
    components: {
    },
}
</script>

<template>
    <main class="animate-smoothApparition flex flex-col w-full h-full items-center gap-8">
        <h1 class="text-4xl">Erreur 404</h1>
        <h2 class="text-5xl">
            Vous êtes perdus ?
        </h2>
        <a href="/" class="text-lg text-gray-200 hover:text-gray-500">Retournez à l'accueil <i class="fa-solid fa-arrow-left"></i></a>
    </main>
</template>