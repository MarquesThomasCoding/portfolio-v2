<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  name: 'AboutView',
    components: {
        SectionTitle
    },
}
</script>

<template>
    <main>
        <SectionTitle title="About me" />
        <div class="ml-[50%] flex flex-col gap-16">
            <div class="flex flex-col gap-5">
                <h2 class="text-6xl text-gray-200">Hello</h2>
                <div class="flex flex-col gap-5">
                    <span class="text-base">I'm a future web developer</span>
                    <span class="text-base">I'm currently studying at IIM, in France, in 2nd year</span>
                    <span class="text-base">My goal is to contribute to this world of technologies, by providing innovative, elegant solutions that make a significant difference</span>
                </div>
            </div>
            <span class="text-gray-200 text-xl">See my Curriculum Vitae</span>
        </div>
    </main>
</template>