<template>
  <div class="welcomepage">
    <div v-if="quiz === true">
      <div>
        <h1>あなたにピッタリの旅行先は？</h1>
      </div>
      <div>
        <transition
          ><img
            :src="slidshow[index]"
            alt="表示するものがありません"
            width="1000px;"
            height="600px;"
        /></transition>
      </div>
      <div>
        <h3>⇩心理テストでおすすめの旅行先を⇩</h3>
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
      slidshow: [
        "https://www.min-travel.co.jp/storage/uploads/lpJReA9IGqRGhonkx9bHzmnvHI2xGvfXpuNGXvAt.png",
        "https://skyticket.jp/guide/wp-content/uploads/800px-Basilique_du_Notre_Dame_de_la_Paix_Yammassoukro_Cote_dIvoire-e1484977704690.jpg",
        "https://skyticket.jp/guide/wp-content/uploads/shutterstock_546854263-e1486980380686.jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/33/a6/61.jpg",
        "https://www.dososhin.com/img/know/country/STP/main.jpg",
        "https://www.nta.co.jp/media/tripa/static_contents/nta-tripa/item_images/images/000/064/257/medium/d4ebcdd7-2ea7-4fd7-968f-fe39595f788b.jpg?1550675775",
        "https://resize2-icotto.k-img.com/c1PPxjCPz5xVxudawemWTZg5dAASgMcArNB14DsXdYg/rs:fill:700:467/plain/https://icotto.k-img.com/system/press_images/000/027/648/eace95fffd6f8a0eae0cf7a79887d6836f63596c.jpeg",
        "https://annbread.com/wp-content/uploads/2020/06/TKN08949.jpg",
      ],
      index: 0,
    }
  },
  methods: {
    shindan: function () {
      this.quiz = false
    },
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.slidshow.length - 1 ? this.index + 1 : 0
    }, 3000)
  },
}
</script>

<style scoped>
.welcomepage {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 10%;

  background: #343536;
  background-position: center;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-size: contain;
  color: rgb(255, 255, 255);
}
/*.bg_pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffe9a7;
  opacity: 0.4;
  z-index: -1;
}
.Cross {
  background: radial-gradient(
      circle,
      transparent 20%,
      #ffe9a7 20%,
      #ffe9a7 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #ffe9a7 20%,
        #ffe9a7 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#ffc107 4px, transparent 4px) 0 -2px,
    linear-gradient(90deg, #ffc107 4px, #ffe9a7 4px) -2px 0;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
}

.decoration-title {
  font-size: 100pt;
  line-height: 1;
  color: #ffffff;
  font-family: "Anton", sans-serif;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 10px;
  line-height: 1.3;
}*/

h1 {
  font-size: 50pt;
  font-family: Hiragino-sans;
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
  background-color: rgb(46, 67, 95);
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
