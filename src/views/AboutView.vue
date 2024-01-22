<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
    name: 'AboutView',
    components: {
        SectionTitle
    },
    methods: {
        openPDF() {
            window.open('/assets/files/CV_MarquesThomas_Alternance.pdf', '_blank');
        }
    }
}
</script>

<template>
    <main class="grid grid-cols-1 grid-rows-[min-content,auto] w-full animate-smoothApparition">
        <SectionTitle title="About me" class="col-span-full" />
        <div class="w-full grid grid-cols-[min-content,auto] gap-20">
            <div class="w-64 aspect-square">
                <img src="/imgs/me.jpg" alt="me" class="w-full h-full object-cover object-top rounded-lg shadow-lg">
            </div>
            <div class="flex flex-col gap-16">
            <div class="flex flex-col gap-5">
                <h2 class="text-6xl text-gray-200">Hello world!</h2>
                <div class="flex flex-col gap-5">
                    <span class="text-lg flex justify-start items-center gap-2.5"><img src="/imgs/web.png" alt="web" class="w-6">I'm a future web developer</span>
                    <span class="text-lg flex justify-start items-center gap-2.5"><img src="/imgs/school.png" alt="school" class="w-6">I'm currently studying at IIM, in France, in 2nd year</span>
                    <span class="text-lg flex justify-start items-center gap-2.5"><img src="/imgs/goal.png" alt="goal" class="w-6">My goal is to contribute to this world of technologies, by providing innovative, elegant solutions that make a significant difference</span>
                </div>
            </div>
            <span class="text-gray-200 text-xl"><a @click="openPDF()" class="flex items-center gap-2.5 hover:underline w-fit cursor-pointer"><img src="../assets/imgs/cv.png" alt="cv" class="w-12"> ← See my Curriculum Vitae</a></span>
        </div>
        </div>
    </main>
</template>