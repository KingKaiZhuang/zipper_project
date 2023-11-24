const express = require("express");
const router = express.Router();
const model = require("../model");

router.get("/", async (req, res) => {
  try {
    let data = await model.zipper.find({}, { ZipperNum: 1, _id: 0 });

    const result = await model.zipper.find(
      {},
      { successPercent: 1, wrongPercent: 1, "_id": 0 }
    );

    const percent = result[0]
    
    const successPercent = percent["successPercent"];
    const wrongPercent = result[0].wrongPercent;
    
    
    console.log("Percent:", result);
    console.log(percent)
    console.log("Success Percent:", successPercent);
    console.log("Wrong Percent:", wrongPercent);
    console.log("Wrong number:", data[0].ZipperNum); // 資料損壞數量

    const ResponseData = {
      data: data,
      successPercent: successPercent,
      wrongPercent: wrongPercent
    }
    // 只有在成功時才發送回應
    res.json(ResponseData);

  } catch (err) {
    console.log(err);
    // 發生錯誤時才發送錯誤回應
    res.status(500).json({ message: "Server 端發生錯誤 !" });
  }
});

module.exports = router
