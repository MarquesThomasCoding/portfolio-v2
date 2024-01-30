<script>
import SectionTitle from '../components/SectionTitle.vue';
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactView',
    components: {
        SectionTitle
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_hqep5yi', 'template_6okmd4l', this.$refs.form, 'jsS5BIOuCJHSI1yLF')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        }
    }
}
</script>

<template>
    <main class="animate-smoothApparition">
        <SectionTitle title="Contact" />
        <form ref="form" @submit.prevent="sendEmail" class="flex flex-col w-full text-gray-200 p-4">
            <div class="flex gap-8 max-[800px]:flex-col">
                <div class="flex flex-col w-full">
                    <div class="flex flex-col relative">
                        <label class="mt-4 text-lg">Name</label>
                        <input type="text" name="from_name" class="bg-zinc-800 rounded-md p-2 focus:bg-gray-700 focus:outline-none" required="required">
                    </div>
                    <div class="flex flex-col">
                        <label class="mt-4 text-lg">Email</label>
                        <input type="email" name="from_email" class="bg-zinc-800 rounded-md p-2 focus:bg-gray-700 focus:outline-none" required="required">
                    </div>
                </div>
                <div class=" flex flex-col w-full">
                    <label class="mt-4 text-lg">Message</label>
                    <textarea name="message" class="bg-zinc-800 rounded-md p-2 h-full min-h-60 resize-none focus:bg-gray-700 focus:outline-none" required="required"></textarea>
                </div>
            </div>
            <button type="submit" class="flex gap-2 items-center cursor-pointer bg-zinc-600 w-fit px-4 py-2 rounded-lg self-center mt-6 text-lg hover:bg-gray-700 hover:text-gray-400">Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>

        <div class="w-fit flex flex-col gap-4">
            <h3 class="text-2xl">Other ways to contact me :</h3>
            <span class="w-fit group relative">
                <a class="flex gap-4 items-center" href="https://linkedin.com/in/marquesthomas">
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn">
                    <p class="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-in-out">LinkedIn</p>
                </a>
            </span>
            <span class="w-fit group relative">
                <a class="flex gap-4 items-center" href="https://discord.bio/thomluck">
                    <img src="https://skillicons.dev/icons?i=discord" alt="Discord">
                    <p class="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-in-out">Discord</p>
                </a>
            </span>
        </div>


    </main>
</template>