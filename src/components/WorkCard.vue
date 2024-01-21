<script>
export default {
    name: 'WorkCard',
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-start justify-start p-5 bg-zinc-950 rounded-l-3xl h-full">
        <h3 class="text-4xl font-semibold px-10 py-5 text-gray-200 border-b border-b-gray-200">{{ work.name }}</h3>
        <p class="p-2.5">{{ work.date }}</p>
        <div class="px-10 py-2.5 w-full">
            <img @click="openLink(work.link)" :src="work.image" :alt="work.title" class="w-full h-64 object-cover object-top rounded-lg shadow-lg cursor-pointer hover:opacity-50">
        </div>
        <p class="text-gray-200 px-10 py-2.5">{{ work.description }}</p>
    </div>
</template>