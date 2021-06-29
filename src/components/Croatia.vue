// 参考https://www.nta.co.jp/summer/shindan/result/result_10.html

<template>
  <div id="wrapper">
    <div id="resultBlock">
      <div id="resultAreaBlock" class="Croatia">
        <div id="resultAreaTitle">
          "あなたにおすすめの旅先は...”
          <br />
          <h2>クロアチア</h2>
        </div>

        <div id="resultAreaBody">
          "アドリア海と街並みの織りなす美しいコントラストが魅力"
          <br />
          <br />
          "古代ローマ3000年の歴史に思いを馳せるクロアチア"
        </div>
        <div id="resultAreaImage">
          <img
            src="../assets/Cro_top.jpeg"
            alt="クロアチア"
            id="resultAreaImage"
          />
        </div>
      </div>
      <div id="resultImageBlock">
        <div class="image_thumb">
          <img
            src="../assets/Cro_ディオクレティアヌス宮殿.jpg"
            alt="観光地1"
            class="image"
          />
          <div class="text">
            <p>ディオクレティアヌス宮殿</p>
            <p>
              3世紀末古代ローマのディオクレティアヌス帝が現在に遺した歴史の深い宮殿
            </p>
          </div>
        </div>
        <div class="image_thumb">
          <img
            src="../assets/Cro_ドブロニク旧市街.jpg"
            alt="観光地2"
            class="image"
          />
          <div class="text">
            <p>ドブロニク旧市街</p>
            <p>アドリア海の真珠とも称され魔女の宅急便の美しい街並みが広がる</p>
          </div>
        </div>
        <div class="image_thumb">
          <img
            src="../assets/Cro_プリトヴィツェ湖群国立公園.jpg"
            alt="観光地3"
            class="image"
          />
          <div class="text">
            <p>プリトヴィツェ湖群国立公園</p>
            <p>大小16の湖と92の滝が生み出す躍動感のある奇跡的な景観</p>
          </div>
        </div>
      </div>
      <!-- <div id="resultTxtBlock">
        "〜〜〜〜〜〜〜〜〜〜〜〜〜〜"
        <br />
        "〜〜〜〜〜〜〜〜〜〜〜〜〜"
      </div> -->
      <div id="resultLinkBlock">
        <div id="snsBlock" class="retry-btn">
          <a href=" " class="retry-btn">
            <span>もう一度診断する</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* resultBlock */
.wrapper {
  width: 100%;
  background: #eaf4fd;
}

h2 {
  position: relative;
  padding: 0.5em;
  text-align: center;
  margin: 5rem;
  background: linear-gradient(transparent 40%, #ffc037 150%);
}

h2:before,
h2:after {
  position: absolute;
  content: "";
}

h2:after {
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-top: 4px solid rgb(23, 2, 114);
  border-left: 4px solid rgb(23, 2, 114);
}

h2:before {
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-right: 4px solid rgb(23, 2, 114);
  border-bottom: 4px solid rgb(23, 2, 114);
}

.wrapper #resultBlock {
  max-width: 1000px;
  margin: 0px auto;
  padding: 80px 0px;
  font-family: "Hannotate SC";
}
/* resultImageBlock */
#resultAreaBlock {
  margin: 40px 0px 40px 0px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
}
#resultAreaImage {
  margin: 70px 0px 70px 0px;
  border-radius: 5%;
}

@media (min-width: 992px) {
  .wrapper #resultAreaBlock #resultImageBlock {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #resultImageBlock {
    margin-top: 70px;
    margin-bottom: 70px;
  }
}
.image_thumb {
  margin: 50px 0px;
  padding: 0px 50px;
  text-align: center;
  float: left;
}
@media (min-width: 992px) {
  .image_thumb {
    margin: 0px;
    width: calc(100% / 3);
  }
}
.image_thumb .image {
  display: block;
  width: 300px;
  height: 300px;
  max-width: 300px;
  margin: 0px auto 20px auto;
  border-radius: 100%;
}
#resultAreaBlock .image_thumb .text {
  line-height: 1.8rem;
  font-size: 0.8rem;
  color: #666666;
}

#resultLinkBlock {
  padding: 200px 0 200px 0;
  margin: 30rem 0 0 0;
  display: block;
}

.retry-btn {
  display: inline-block;
  position: relative;
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
  background: #fff;
}
.retry-btn::before {
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top: 1px solid #1b1b1b;
  border-left: 1px solid #1b1b1b;
}
.retry-btn::after {
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-top: 1px solid #1b1b1b;
  border-right: 1px solid #1b1b1b;
}
.retry-btn span::before {
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-bottom: 1px solid #1b1b1b;
  border-left: 1px solid #1b1b1b;
}
.retry-btn span::after {
  display: inline-block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-bottom: 1px solid #1b1b1b;
  border-right: 1px solid #1b1b1b;
}
.retry-btn:hover {
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s;
  transform-origin: center;
  transform: scale(0.8, 0.8);
}
</style>
