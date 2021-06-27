<template>
  <div id="app">
    <!--NavBar />
    <router-view /-->
    <Welcomepage />
  </div>
</template>

<script>
//import NavBar from "@/components/NavBar.vue"
import Welcomepage from "./components/Welcomepage.vue"

export default {
  components: {
    // NavBar,
    Welcomepage,
  },
}
</script>

<style>
#app {
  text-align: center;
  align-items: center;
}
/* {
  box-sizing: border-box;
}
body {
  margin: 0;
}*/
</style>
