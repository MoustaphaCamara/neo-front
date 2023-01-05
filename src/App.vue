<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/TestPage.vue'

function achter(val) {
  
  return val
}
</script>

<template>

  <HelloWorld msg="huyguytgutg + Vue" />
  <TestPage/>
  {{ achter("Coucou fred") }}
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
