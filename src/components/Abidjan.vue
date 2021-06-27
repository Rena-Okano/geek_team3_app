// 参考https://www.nta.co.jp/summer/shindan/result/result_10.html

<template>
  <div class="wrapper">
    <div id="resultBlock">
      <div id="resultAreaBlock" class="Abidjan">
        <div id="resultAreaTitle">
          "あなたにおすすめの旅先は...”
          <br />
          <h2>アビジャン</h2>
        </div>
        <div></div>
        <div id="resultAreaBody">
          "西アフリカ コートジボワールの大都市！"
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
      <div id="resultTxtBlock">
        "〜〜〜〜〜〜〜〜〜〜〜〜〜〜"
        <br />
        "〜〜〜〜〜〜〜〜〜〜〜〜〜"
      </div>
      <div id="resultLinkBlock" class="clearfix">
        <div id="snsBlock" class="clearfix">
          <a href=" ">
            <img src=" " alt="もう一度診断する" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* resultBlock */
.wrapper {
  width: 100%;
}

.wrapper #resultBlock {
  max-width: 1000px;
  margin: 0px auto;
  padding: 80px 0px;
}
/* resultImageBlock */
/* .wrapper #resultAreaBlock #resultAreaTitle {
  margin: 0px 0px 40px 0px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
} */
@media (min-width: 992px) {
  .wrapper #resultAreaBlock #resultImageBlock {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.wrapper #resultAreaBlock .image_thumb {
  margin: 50px 0px;
  padding: 0px 50px;
  text-align: center;
}
@media (min-width: 992px) {
  .wrapper #resultAreaBlock .image_thumb {
    margin: 0px;
    width: calc(100% / 3);
  }
}
.wrapper #resultAreaBlock .image_thumb .image {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0px auto 20px auto;
  border-radius: 100%;
}
.wrapper #resultAreaBlock .image_thumb .text {
  line-height: 1.8rem;
  font-size: 0.8rem;
  color: #666666;
}
</style>
