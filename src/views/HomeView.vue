<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
    name: 'HomeView',
    components: {
        SectionTitle
    },
    methods: {
        openPDF() {
            window.open('/files/CV_MarquesThomas_Alternance.pdf', '_blank');
        }
    }
}
</script>

<template>
    <main class="grid grid-cols-1 grid-rows-[min-content,auto] w-full animate-smoothApparition">
        <SectionTitle title="About me" class="col-span-full" />
        <div class="w-full grid grid-cols-[min-content,auto] gap-20 max-[814px]:grid-cols-1">
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
              <span class="text-gray-200 text-xl"><a @click="openPDF()" class="flex items-center gap-2.5 hover:underline w-fit cursor-pointer"><img src="/imgs/cv.png" alt="cv" class="w-12"> ← See my Curriculum Vitae</a></span>
          </div>
        </div>
        <div class="grid grid-cols-3 justify-items-center text-gray-400 h-fit gap-4 mx-5 max-[814px]:mt-6 max-[650px]:grid-cols-1">
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Languages</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-html5-plain text-4xl"></i>
              <i class="devicon-css3-plain text-4xl"></i>
              <i class="devicon-javascript-plain text-4xl"></i>
              <i class="devicon-php-plain text-4xl"></i>
              <i class="devicon-mysql-plain text-4xl"></i>
              <i class="devicon-python-plain text-4xl"></i>
            </span>
          </div>
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Frameworks</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-vuejs-plain text-4xl"></i>
              <i class="devicon-react-original text-4xl"></i>
              <i class="devicon-tailwindcss-plain text-4xl"></i>
            </span>
          </div>
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Tools</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-figma-plain text-4xl"></i>
              <i class="devicon-wordpress-plain text-4xl"></i>
            </span>
          </div>
        </div>
    </main>
</template>