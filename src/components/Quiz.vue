<template>
  <div>
    <div v-if="answer === 'アビジャン'">
      <Abidjan />
    </div>
    <div v-else-if="answer === 'サマルカンド'">
      <Samarkand />
    </div>
    <div v-else-if="answer === 'サントメ・プリンシペ'">
      <SaoTome />
    </div>
    <div v-else-if="answer === 'ディングル半島'">
      <Dingle />
    </div>
    <div v-else-if="answer === 'クロアチア'">
      <Croatia />
    </div>
    <div v-else-if="answer === '金沢'">
      <Kanazawa />
    </div>
    <div v-else-if="answer === '豊島'">
      <Teshima />
    </div>
    <div v-else-if="answer === '八ッ場'">
      <Yamba />
    </div>
    <div v-else>
      <h1>{{ Quiz[index].Question }}</h1>
      <button v-on:click="yes">{{ Quiz[index].Yes }}</button>
      <button v-on:click="no">{{ Quiz[index].No }}</button>
      <button v-bind:disabled="flag" v-on:click="next">次へ</button>
    </div>
  </div>
</template>
<script>
import Abidjan from "@/components/Abidjan.vue"
import Samarkand from "@/components/Samarkand.vue"
import SaoTome from "@/components/SaoTome.vue"
import Dingle from "@/components/Dingle.vue"
import Croatia from "@/components/Croatia.vue"
import Kanazawa from "@/components/Kanazawa.vue"
import Teshima from "@/components/Teshima.vue"
import Yamba from "@/components/Yamba.vue"

export default {
  components: {
    Abidjan,
    Samarkand,
    SaoTome,
    Dingle,
    Croatia,
    Kanazawa,
    Teshima,
    Yamba,
  },
  data() {
    return {
      Quiz: [
        {
          Question: "旅行に行くなら国内？海外？",
          Yes: "国内",
          No: "海外",
        },

        {
          Question: "涼しい所に行きたい？暖かい所に行きたい？",
          Yes: "涼しい",
          No: "暖かい",
        },

        {
          Question:
            "旅行先では美味しいものを食べたい？それともインスタ映えのところに行きたい？",
          Yes: "美味しいもの",
          No: "インスタ映え",
        },
        {
          Question: "リゾートで休みたい？体を動かしたい？",
          Yes: "リゾート",
          No: "体を動かしたい",
        },
        {
          Question: "伝統的な街に行きたい？近未来に行きたい？",
          Yes: "伝統的",
          No: "近未来",
        },
        {
          Question: "自然？都会？",
          Yes: "自然",
          No: "都会",
        },
      ],

      index: 0,

      yesno: "",

      flag: true,

      selection: [],

      answer: "",

      test: [
        [
          //国内
          [
            //国内で涼しい

            { place: "金沢", choice: ["yes", "yes", "yes", "yes"] },
            { place: "八ッ場", choice: ["no", "no", "no", "yes"] },
          ],
          [
            //国内で温かい
            { place: "豊島", choice: ["no", "yes", "no", "yes"] },
          ],
        ],

        [
          [
            //海外で涼しい
            { place: "ディングル半島", choice: ["no", "yes", "yes", "yes"] },
            { place: "クロアチア", choice: ["no", "no", "yes", "yes"] },
          ],
          [
            //海外で温かい
            { place: "アビジャン", choice: ["yes", "yes", "no", "no"] },
            { place: "サマルカンド", choice: ["no", "yes", "no", "no"] },
            {
              place: "サントメ・プリンシペ",
              choice: ["yes", "no", "yes", "yes"],
            },
          ],
        ],
      ],
    }
  },
  methods: {
    yes: function () {
      this.flag = false
      //配列に選択肢や問題を並べてIfで指定
      //Yes、Noの文字を変える
      //回答の要素を入れる箱を変える カウントが変わるものを作る
      this.yesno = "yes"
    },
    no: function () {
      this.flag = false
      this.yesno = "no"
    },
    next: function () {
      this.index += 1
      if (this.index >= 0 && this.index <= 5) {
        this.flag = true
        this.selection.push(this.yesno)
      } else {
        this.result()
      }
    },

    result: function () {
      let index1 = 0
      let index2 = 0

      if (this.selection[0] == "yes") {
        index1 = 0
      } else {
        index1 = 1
      } //国内か海外か
      if (this.selection[1] == "yes") {
        index2 = 0
      } //涼しいか暖かいか
      else {
        index2 = 1
      }
      let match = 0
      let maxmatch = 0
      for (let i = 0; i < this.test[index1][index2].length; i++) {
        match = 0
        for (let j = 0; j < this.test[index1][index2][i].choice.length; j++) {
          if (this.selection[j + 2] == this.test[index1][index2][i].choice[j]) {
            match += 1
          }
        }
        if (maxmatch < match) {
          maxmatch = match
          this.answer = this.test[index1][index2][i].place
        }
      }
    },
  },
}
</script>
<style></style>
