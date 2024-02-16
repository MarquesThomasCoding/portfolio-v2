<script>
import SectionTitle from '@/components/SectionTitle.vue';
import SkillsSection from '@/components/SkillsSection.vue';

export default {
    name: 'HomeView',
    components: {
    SectionTitle,
    SkillsSection
},
    methods: {
        openPDF() {
            window.open('/files/CV_MarquesThomas_Alternance.pdf', '_blank');
        },
        changeIconOver(id) {
          document.querySelector(`#${id}`).classList.add('colored');
        },
        changeIconOut(id) {
          document.querySelector(`#${id}`).classList.remove('colored');
        },
    }
}
</script>

<template>
    <main class="grid grid-cols-1 grid-rows-[min-content,auto] w-full animate-smoothApparition">
        <SectionTitle title="A propos" class="col-span-full" />
        <div class="w-full grid grid-cols-[min-content,auto] gap-20 max-[814px]:grid-cols-1">
            <div class="w-64 aspect-square max-[300px]:w-full">
                <img src="/imgs/me.jpg" alt="me" class="w-full aspect-square object-cover object-top rounded-lg shadow-lg">
            </div>
            <div class="flex flex-col gap-16">
              <div class="flex flex-col gap-5">
                  <h2 class="text-6xl text-gray-200">Hello world!</h2>
                  <div class="flex flex-col gap-5">
                      <span class="text-lg flex justify-start items-center gap-2.5"><i class="fa-solid fa-globe"></i>Développeur web</span>
                      <span class="text-lg flex justify-start items-center gap-2.5"><i class="fa-solid fa-graduation-cap"></i>Etudiant en 2ème année à l'IIM Digital School</span>
                      <span class="text-lg flex justify-start items-center gap-2.5"><i class="fa-solid fa-magnifying-glass"></i>A la recherche d'une alternance en apprentissage au rythme de 3 semaines entreprise / 1 semaine école pour septembre 2024</span>
                      <span class="text-lg flex justify-start items-center gap-2.5"><i class="fa-solid fa-bullseye"></i>Objectif : contribuer au monde du numérique, en fournissant des solutions innovantes et élégantes qui font une différence significative.</span>
                  </div>
              </div>
              <span class="text-gray-200 text-xl"><a @click="openPDF()" class="flex items-center gap-2.5 hover:underline w-fit cursor-pointer"><img src="/imgs/cv.png" alt="cv" class="w-12"> ← Voir mon Curriculum Vitae</a></span>
          </div>
        </div>
        
        <SkillsSection />
    </main>
</template>