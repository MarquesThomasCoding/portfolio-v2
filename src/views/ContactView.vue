<script>
import SectionTitle from '../components/SectionTitle.vue';
import FormContact from '@/components/FormContact.vue';

export default {
    name: 'ContactView',
    components: {
        SectionTitle,
        FormContact,
    },
}
</script>

<template>
    <main class="animate-smoothApparition">
        <SectionTitle title="Contact" />
        
        <FormContact />

        <div class="w-fit flex flex-col gap-4">
            <h3 class="text-2xl">Autre moyens de me contacter :</h3>
            <span class="w-fit group relative">
                <a class="flex gap-4 items-center" href="https://linkedin.com/in/marquesthomas">
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=linkedin" alt="LinkedIn">
                    <p class="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-in-out">LinkedIn</p>
                </a>
            </span>
            <span class="w-fit group relative">
                <a class="flex gap-4 items-center" href="https://discord.bio/thomluck">
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=discord" alt="Discord">
                    <p class="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-in-out">Discord</p>
                </a>
            </span>
        </div>


    </main>
</template>