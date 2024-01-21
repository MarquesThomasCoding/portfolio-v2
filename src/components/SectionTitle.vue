<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <h2 class="text-6xl mb-5 py-5 border-b-gray-400 border-b-2 w-fit">{{ title }}</h2>
</template>