<script>
import SectionTitle from '../components/SectionTitle.vue';
import WorkCard from '@/components/WorkCard.vue';
import { useWorkStore } from '@/stores/work';

export default {
    name: 'MyWorksView',
    setup() {
        const workStore = useWorkStore();
        return {
            workStore
        }
    },
    data() {
        return {
            work: this.workStore.works[0]
        }
    },
    components: {
        SectionTitle,
        WorkCard
    },
    methods: {
        showWork(work) {
            const workElements = document.querySelectorAll('li');
            const workElement = document.getElementById(work.id);

            workElements.forEach(element => {
                element.classList.remove('bg-zinc-950');
            });

            workElement.classList.add('bg-zinc-950');

            this.setWork(work);
        },
        setWork(work) {
            this.work = work;
        }
    },
}
</script>

<template>
    <main class="grid grid-cols-2 grid-rows-[min-content,auto] w-full animate-smoothApparition">
        <SectionTitle title="My works" class="col-span-full" />
        <div class="w-full">
            <WorkCard :work="this.work"/>
        </div>
        <div class="w-full">
            <ul class="w-full">
                <li :id="work.id" @mouseover="showWork(work)" v-for="(work, index) in this.workStore.works" :key="work.id" class="flex items-center w-full py-2.5 pl-5 transition-colors duration-250 gap-12 hover:bg-zinc-950 border-b border-gray-500 last:border-b-0" :class="{ 'bg-zinc-950': index === 0, 'border-l-0': index === 0 }">
                    <div class="w-full flex flex-col">
                        <div class="w-full flex justify-between items-start">
                            <span class="text-3xl text-gray-200 uppercase">{{ work.name }}</span>
                            <a :href="work.link"><img src="/imgs/lien.png" alt="lien" class="w-5"></a>
                        </div>
                        <span>{{ work.date }}</span>
                        <span>{{ work.description }}</span>
                    </div>
                    <div class="pr-10">
                        <img :src="work.image" alt="illustration" class="w-40 h-20 object-cover object-top">
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>