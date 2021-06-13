<template>
  <div class="about">
    <Abidjan></Abidjan>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Abidjan from "@/components/Abidjan.vue"

export default {
  name: "result",
  components: {
    Abidjan,
  },
}
</script>
