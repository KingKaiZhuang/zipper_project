const mongoose = require("mongoose");
const conn = require("./db");
// 建立Schema
const zipperSchema = mongoose.Schema(
    {
        "ZipperNum": Number
    },
    {
        collection: "zipper-table",
        versionKey : false
    }
);
// 建立 model 物件
let zipperSchemaModel = conn.model("Zippers", zipperSchema);

module.exports = zipperSchemaModel;