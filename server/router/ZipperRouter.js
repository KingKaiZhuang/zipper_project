const express = require("express");
const router = express.Router();
const model = require("../model")

router.get("/",async(req,res)=>{
    try {
        let data = await model.zipper.find({}, { _id: 1 });
        data = data.map(item => parseInt(item.ZipperNum, 10));
        res.json({result : data});
        console.log(data);
    } catch(err) {
        console.log(err);
        res.status(500).json({message : "Server 端發生錯誤 !"});
    }
});

module.exports = router;