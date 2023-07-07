const express = require("express");
const router3 = express.Router();

router3.post("/register", (req, res) => {
    res.send("Hello..This is Register Page");
    console.log(req.body);
})
module.exports = router3;

