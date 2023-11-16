const express = require("express");
const NumberInt = require('mongoose-int32');
const router = express.Router();
const model = require("../model")

router.get("/",async(req,res)=>{
    try {
        let data = await model.zipper.find({}, { ZipperNum: 1, _id: 0 });
        res.json({result : data});
        console.log(data[0].ZipperNum);
    } catch(err) {
        console.log(err);
        res.status(500).json({message : "Server 端發生錯誤 !"});
    }
});

module.exports = router;