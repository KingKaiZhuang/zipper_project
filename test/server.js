const express = require('express');
const mongoose = require('mongoose');
const gridfs = require('gridfs-stream');
const path = require('path');

const app = express();
const port = 3000;

// 連接 MongoDB
mongoose.connect('mongodb://localhost:27017/ZipperWatch');

// 初始化 GridFS
let gfs;
mongoose.connection.once('open', () => {
  gfs = gridfs(mongoose.connection.db, mongoose.mongo);
});

// 設定模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 路由：首頁
app.get('/', (req, res) => {
  // 取得圖片的資料流
  const imageStream = gfs.createReadStream({ filename: 'fs.file' });

  // 建立一個 Buffer 用於暫存資料
  let buffer = Buffer.from('');

  // 處理資料流的事件
  imageStream.on('data', chunk => {
    buffer = Buffer.concat([buffer, chunk]);
  });

  imageStream.on('end', () => {
    // 將 Buffer 傳送至前端
    const imageData = buffer.toString('base64');
    res.render('index', { image_data: imageData });
  });

  imageStream.on('error', (err) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
  });
});

// 開啟伺服器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
