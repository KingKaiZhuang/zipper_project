const mongoose = require("mongoose");
const conn = require("./db");
// 建立Schema
const zipperSchema = mongoose.Schema(
    {
        ZipperNum: Number,
        successPercent: {
            type: Number,
            required: true,
        },
        wrongPercent: {
            type: Number,
            required: true,
        },
    },
    {
        collection: "zipper-table",
        versionKey: false
    }
);
// 建立 model 物件
let zipperSchemaModel = conn.model("Zippers", zipperSchema);

module.exports = zipperSchemaModel;