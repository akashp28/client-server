const express = require("express");
const router1 = express.Router();

router1.get("/", (req, res) => {
    res.send("Hello... Welcome to Home Page");
    console.log(req.body);
})


module.exports = router1;
