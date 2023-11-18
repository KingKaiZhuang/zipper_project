const express = require("express");
const router = express.Router();
const model = require("../model");

module.exports = function(io) {
    const zipperNamespace = io.of("/zipper"); // 使用命名空間
  
    zipperNamespace.on('connection', (socket) => {
      console.log('A user connected to zipper namespace');
  
      // 在這裡處理與 WebSocket 連接相關的邏輯
      socket.on('disconnect', () => {
        console.log('User disconnected from zipper namespace');
      });
    });
  
    router.get("/", async (req, res) => {
      try {
        let data = await model.zipper.find({}, { ZipperNum: 1, _id: 0 });
        console.log(data[0].ZipperNum);
  
        // 只有在成功時才發送回應
        res.json({ result: data });
        
        // 修改這裡，將數據推送到 WebSocket 命名空間
        zipperNamespace.emit('zipperDataUpdate', data[0]); // 發送 WebSocket 訊息
        console.log('WebSocket message sent:', data[0]);
      } catch (err) {
        console.log(err);
        // 發生錯誤時才發送錯誤回應
        res.status(500).json({ message: "Server 端發生錯誤 !" });
      }
    });
  
    return router;
  };
  
  
