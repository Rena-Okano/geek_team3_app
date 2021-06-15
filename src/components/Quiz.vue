<template>
  <div>
    <h1>{{ Quiz[index].Question }}</h1>
    <button v-on:click="yes">{{ Quiz[index].Yes }}</button>
    <button v-on:click="no">{{ Quiz[index].No }}</button>
    <button v-bind:disabled="flag" v-on:click="next">次へ</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Quiz: [
        {
          Question: "旅行に行くなら国内？海外？",
          Yes: "国内",
          No: "海外",
        },

        {
          Question: "暖かい所に行きたい？涼しい所に行きたい？",
          Yes: "暖かい",
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
            { place: "八ッ場", choice: [("no", "no", "no", "yes")] },
          ],
          [
            //国内で温かい
            { place: "豊島", choice: [] },
          ],
        ],

        [
          [
            //海外で涼しい
            { place: "ディングル半島", choice: [] },
            { place: "クロアチア", choice: [] },
          ],
          [
            //海外で温かい
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
        this.resulet()
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
        //choice2 selection4
        match = 0
        for (let j = 0; j < this.test[index1][index2][i].choice.length; j++) {
          //choice1 selection3
          if (this.selection[j + 2] == this.test[index1][index2][i].choice[j]) {
            match += 1
          }
          // choice0 selection2
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
