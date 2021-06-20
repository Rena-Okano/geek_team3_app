<template>
  <div class="welcomepage">
    <div v-if="quiz === true">
      <div>
        <h2>あなたにピッタリの旅行先は？</h2>
      </div>
      <div>
        <img
          src="https://1.bp.blogspot.com/-EqzOEPHpoK4/UZSsovw5jpI/AAAAAAAAS5E/LwiSgyae1BA/s400/TajMahal.png"
          alt="表示するものがありません"
        />
      </div>
      <div>
        <p>⇩心理テストでおすすめの旅行先を⇩</p>
        <p></p>
      </div>

      <div>
        <button class="shindan-button" v-on:click="shindan">診断する</button>
        <!-- <a class="button" href="#">診断する</a> -->
      </div>
    </div>
    <div v-else><Quiz /></div>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue"
export default {
  components: { Quiz },
  data() {
    return {
      quiz: true,
    }
  },
  methods: {
    shindan: function () {
      this.quiz = false
    },
  },
}
</script>

<style scoped>
h2 {
  color: #ff7c00;
  background: -webkit-linear-gradient(
    top,
    #ffb76b 0%,
    #ffa73d 50%,
    #ff7c00 51%,
    #ff7f04 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shindan-button {
  background-color: #333;
  border: 2px solid #333;
  color: #fff;
  line-height: 50px;
  width: 25%;
  padding: 20px;
}
.shindan-button:hover {
  background-color: #fff;
  border-color: #59b1eb;
  color: #59b1eb;
}
</style>
