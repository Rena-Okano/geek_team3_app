<template>
  <div>
    <NavBar />
    <router-view />
    <Welcomepage />
    <Quiz />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Welcomepage from "./components/Welcomepage.vue"
import Quiz from "@/components/Quiz.vue";

export default {
  components: {
    NavBar,
    Welcomepage,
    Quiz,
  },
}


</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}


</style>
