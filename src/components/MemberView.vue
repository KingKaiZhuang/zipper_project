<template>
  <div class="member">
    <div class="wrapper">
      <h2>核心成員</h2>
      <hr>
      <div class="members">
        <div class="team-mem">
          <img src="https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0011.jpg?alt=media&token=4f035289-d69d-41a0-8ae8-66a39f10f05b" alt="">
          <h4>陳聖允</h4>
          <p>Bmduino 達人</p>
        </div>
        <div class="team-mem">
          <img src="https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0019.jpg?alt=media&token=b08ed3e6-8ef6-4c49-a80a-3770992d7682" alt="">
          <h4>管浩任</h4>
          <p>Yolo 達人</p>
        </div>
        <div class="team-mem">
          <img src="https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0017.jpg?alt=media&token=6188e01e-7a56-4ef1-8982-9cef5b02cfd9" alt="">
          <h4>黃宗彥</h4>
          <p>Photoshop 美編</p>
        </div>
        <div class="team-mem">
          <img src="https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0026.jpg?alt=media&token=3785e9a7-cb90-4935-9965-45d71b24060b" alt="">
          <h4>蔡沅展</h4>
          <p>English 翻譯</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.member {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.wrapper {
  background: white;
  width: 1200px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
}
h2 {
  text-align: center;
  font-size: 48px;
}
hr {
  width: 100px;
  margin: 10px auto;
}
.members {
  display: flex;
  justify-content: space-around;
}
.team-mem {
  margin: 8px;
}
img {
  width: 180px;
  border-radius: 50%;
  margin: 15px;
}
h4,p {
  text-align: center;
  font-size: 26px;
  margin: 7px;
}
</style>


<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          title: "陳聖允",
          subtitle: "Bmduino 達人",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0011.jpg?alt=media&token=4f035289-d69d-41a0-8ae8-66a39f10f05b",
          description: "擅長 Bmduino 的開發，致力於提供創新的解決方案。擁有豐富的硬體和軟體知識，是我們團隊的技術專家。",
        },
        {
          title: "管浩任",
          subtitle: "Yolo 達人",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0019.jpg?alt=media&token=b08ed3e6-8ef6-4c49-a80a-3770992d7682",
          description: "我專注於 YOLOv7 的開發，將其應用於物體和瑕疵的精確偵測。我的工作範疇包括模型訓練、性能優化。",
        },
        {
          title: "黃宗彥",
          subtitle: "Photoshop 美編",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0017.jpg?alt=media&token=6188e01e-7a56-4ef1-8982-9cef5b02cfd9",
          description: "擁有豐富的 Photoshop 編輯經驗，創造出視覺上令人印象深刻的設計。我們的美編專家，專注於打造視覺效果。",
        },
        {
          title: "蔡沅展",
          subtitle: "English 翻譯",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0026.jpg?alt=media&token=3785e9a7-cb90-4935-9965-45d71b24060b",
          description: "擁有優秀的英文翻譯能力，準確傳達內容並確保語言表達流暢。我們的英翻專家，為團隊提供了國際化的支援。",
        },
      ],
    };
  },
};
</script>
