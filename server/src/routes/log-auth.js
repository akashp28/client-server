const express = require("express");
const router2 = express.Router();

router2.post("/login", (req, res) => {
    res.send("Hello..This is Login Page");
    console.log(req.body);
})
module.exports = router2;

