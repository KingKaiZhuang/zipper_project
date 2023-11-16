// 引入mongoose
const mongoose = require("mongoose");
// mongodb路徑
const connConfig = "mongodb://127.0.0.1:27017/ZipperWatch";
// 建立連線
const conn = mongoose.createConnection(connConfig);
// 執行連線
conn.on("connected", () => {
    console.log("MongoDB is connected");
});
// 連線失敗
conn.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

module.exports = conn;