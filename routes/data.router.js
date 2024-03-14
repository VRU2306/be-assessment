const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const controller = require("../controllers/data.controller")


router.post("/postData", async (req, res) => {
    try {
        await controller.postData(req, res)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router;