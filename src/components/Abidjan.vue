// 参考https://www.nta.co.jp/summer/shindan/result/result_10.html

<template>
  <div class="wrapper">
    <div id="resultBlock">
      <div id="resultAreaBlock" class="Abidjan">
        <div id="resultAreaTitle">
          あなたにおすすめの旅先は...
          <br />
          <h2>アビジャン</h2>
        </div>
        <div></div>
        <div id="resultAreaBody">
          "西アフリカ コートジボワールの大都市！"
          <br />
          <br />
          "近未来建築と大自然が共存するアビジャン"
        </div>
        <div id="resultAreaImage" class="sp_on">
          <img src="../assets/Abidjan_top.jpg" alt="アビジャン" />
        </div>
      </div>
      <div id="resultImageBlock">
        <div class="image_thumb">
          <img
            src="../assets/Abidjan_聖ポール大聖堂.jpg"
            alt="観光地1"
            class="image"
          />
          <div class="text">
            <p>聖ポール大聖堂</p>
            <p>個性的なアフリカ模様のステンドグラスが見られるモダンな大聖堂</p>
          </div>
        </div>
        <div class="image_thumb">
          <img
            src="../assets/Abidjan_プラトーモスク.jpg"
            alt="観光地2"
            class="image"
          />
          <div class="text">
            <p>プラトーのグランドモスク</p>
            <p>
              イスラム教徒の祈りの場、絵本の世界から飛び出たようなデザインの可愛らしいモスク
            </p>
          </div>
        </div>
        <div class="image_thumb">
          <img
            src="../assets/Abidjan_Tai-National-Park.jpg"
            alt="観光地3"
            class="image"
          />
          <div class="text">
            <p>タイ国立公園</p>
            <p>
              西アフリカ最後の貴重な原生林が広がる！コートジボワールの世界遺産
            </p>
          </div>
        </div>
      </div>
      <!-- <div id="resultTxtBlock">
        "〜〜〜〜〜〜〜〜〜〜〜〜〜〜"
        <br />
        "〜〜〜〜〜〜〜〜〜〜〜〜〜"
      </div> -->
      <div id="resultLinkBlock" class="clearfix">
        <div id="snsBlock" class="clearfix">
          <div class=""></div>
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
}

h2 {
  position: relative;
  padding: 1em 2em;
  text-align: center;
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
  border-top: 2px solid rgb(248, 233, 233);
  border-left: 2px solid rgb(248, 233, 233);
}

h2:before {
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-right: 2px solid rgb(248, 233, 233);
  border-bottom: 2px solid rgb(248, 233, 233);
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
.wrapper #resultAreaBlock .image_thumb .text {
  line-height: 1.8rem;
  font-size: 0.8rem;
  color: #666666;
}

.retry-btn {
  /*その他と主な共通部分は省略*/

  overflow: hidden;
  margin-top: 50rem;
  padding: 1.5rem 6rem;

  color: #fff;
  border-radius: 0;
  background: #000;
}

.retry-btn span {
  position: relative;
  z-index: 1;
}

.retry-btn:before {
  position: absolute;
  top: 0;
  left: calc(-100% + 10px);

  width: 100%;
  height: 100%;

  content: "";
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(0) translateY(0);
  transform: translateX(0) translateY(0);

  background: #094;
}

.retry-btn:after {
  position: absolute;
  top: 0;
  right: calc(-100% + 10px);

  width: 100%;
  height: 100%;

  content: "";
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(0) translateY(0);
  transform: translateX(0) translateY(0);

  background: #094;
}

.retry-btn:hover:before {
  -webkit-transform: translateX(50%) translateY(0);
  transform: translateX(50%) translateY(0);
}
.retry-btn:hover:after {
  -webkit-transform: translateX(-50%) translateY(0);
  transform: translateX(-50%) translateY(0);
}
</style>
