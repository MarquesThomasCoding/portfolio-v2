<script>
import NavBar from './components/NavBar.vue';
import TopTitle from './components/TopTitle.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    TopTitle
},
}
</script>

<template>
    <TopTitle />
    <NavBar lang="fr" />
</template>