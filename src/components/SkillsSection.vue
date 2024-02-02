<script>
export default {
    name: 'SkillsSection',
}
</script>

<template>
    <div class="grid grid-cols-3 justify-items-center text-gray-400 h-fit gap-4 mx-5 mt-6 max-[650px]:grid-cols-1">
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Langages</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-html5-plain text-4xl hover:text-red-500 hover:[text-shadow:_0_0_20px_rgb(239_68_68_/_40%)]"></i>
              <i class="devicon-css3-plain text-4xl hover:text-blue-500 hover:[text-shadow:_0_0_20px_rgb(59_130_246_/_40%)]"></i>
              <i class="devicon-javascript-plain text-4xl hover:text-yellow-500 hover:[text-shadow:_0_0_20px_rgb(234_179_8_/_40%)]"></i>
              <i class="devicon-php-plain text-4xl hover:text-cyan-700 hover:[text-shadow:_0_0_20px_rgb(14_116_144_/_40%)]"></i>
              <i class="devicon-mysql-plain text-4xl hover:text-gray-50 hover:[text-shadow:_0_0_20px_rgb(249_250_251_/_40%)]"></i>
              <i class="devicon-python-plain text-4xl hover:text-yellow-400 hover:[text-shadow:_0_0_20px_rgb(250_204_21_/_40%)]"></i>
            </span>
          </div>
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Frameworks</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-vuejs-plain text-4xl hover:text-green-400 hover:[text-shadow:_0_0_20px_rgb(74_222_128_/_40%)]"></i>
              <i class="devicon-react-original text-4xl hover:text-cyan-400 hover:[text-shadow:_0_0_20px_rgb(34_211_238_/_40%)]"></i>
              <i class="devicon-tailwindcss-plain text-4xl hover:text-cyan-900 hover:[text-shadow:_0_0_20px_rgb(22_78_99_/_40%)]"></i>
            </span>
          </div>
          <div class="flex flex-col items-center gap-5 w-full relative border-2 border-gray-400 p-5">
            <h3 class="bg-zinc-900 absolute -top-5 p-2 font-bold">Outils</h3>
            <span class="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
              <i class="devicon-figma-plain text-4xl hover:text-red-400 hover:[text-shadow:_0_0_20px_rgb(248_113_113_/_40%)]"></i>
              <i class="devicon-wordpress-plain text-4xl hover:text-teal-950 hover:[text-shadow:_0_0_20px_rgb(4_47_46_/_40%)]"></i>
              <i class="devicon-github-original text-4xl hover:text-gray-950 hover:[text-shadow:_0_0_20px_rgb(3_7_18_/_40%)]"></i>
              <i class="devicon-git-plain text-4xl hover:text-orange-950 hover:[text-shadow:_0_0_20px_rgb(67_20_7_/_40%)]"></i>
            </span>
          </div>
        </div>
</template>