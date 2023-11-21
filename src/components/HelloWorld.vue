<template>
  <v-container>
    <h1 class="text-center">我們的團隊成員</h1>
    <v-row align="center" justify="center">
      <v-col v-for="member in teamMembers" :key="member.title" cols="auto">
        <v-card class="mx-auto" max-width="300" :title="member.title" :subtitle="member.subtitle" :prepend-avatar="member.avatar">
          <v-card-text>{{ member.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

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
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0019.jpg?alt=media&token=1717ea18-4ffb-4609-a60a-289200672658",
          description: "我專注於 YOLOv7 的開發，將其應用於物體和瑕疵的精確偵測。我的工作範疇包括模型訓練、性能優化和應用部署。",
        },
        {
          title: "黃宗彥",
          subtitle: "Photoshop 美編",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0017.jpg?alt=media&token=6188e01e-7a56-4ef1-8982-9cef5b02cfd9",
          description: "擁有豐富的 Photoshop 編輯經驗，致力於創造出視覺上令人印象深刻的設計。我們的美編專家，專注於打造視覺效果。",
        },
        {
          title: "蔡沅展",
          subtitle: "English 翻譯",
          avatar: "https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2F5b0g0026.jpg?alt=media&token=3785e9a7-cb90-4935-9965-45d71b24060b",
          description: "擁有優秀的英文翻譯能力，致力於準確傳達內容並確保語言表達流暢。我們的英翻專家，為團隊提供了國際化的支援。",
        },
      ],
    };
  },
};
</script>
