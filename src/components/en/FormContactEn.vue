<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'FormContact',
    methods: {
        sendEmail() {
            emailjs.sendForm('service_hqep5yi', 'template_6okmd4l', this.$refs.form, 'jsS5BIOuCJHSI1yLF')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert('Your message has successfully been sent!')
            }, (error) => {
                console.log('FAILED...', error.text);
                alert('An error has occured when sending your message. Please try again later.')
            });
        }
    }

}
</script>

<template>
    <form ref="form" @submit.prevent="sendEmail" class="flex flex-col w-full text-gray-200 p-4">
            <div class="flex gap-8 max-[800px]:flex-col">
                <div class="flex flex-col w-full">
                    <div class="flex flex-col relative">
                        <label class="mt-4 text-lg">Name</label>
                        <input type="text" name="from_name" class="bg-zinc-800 rounded-md p-2 focus:bg-gray-700 focus:outline-none" required="required">
                    </div>
                    <div class="flex flex-col">
                        <label class="mt-4 text-lg">Mail</label>
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
</template>