const express = require("express");
const router = express.Router();
const model = require("../model");



router.get("/", async (req, res) => {
  try {
    let data = await model.zipper.find({}, { ZipperNum: 1, _id: 0 });
    console.log(data[0].ZipperNum);

    // 只有在成功時才發送回應
    res.json({ result: data });

  } catch (err) {
    console.log(err);
    // 發生錯誤時才發送錯誤回應
    res.status(500).json({ message: "Server 端發生錯誤 !" });
  }
});

module.exports = router



