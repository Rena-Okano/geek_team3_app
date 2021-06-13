<template>
  <div class="result">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Here Begins Your New Journey" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "result",
  components: {
    HelloWorld,
  },
}
</script>
