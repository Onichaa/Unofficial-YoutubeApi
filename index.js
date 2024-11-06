const express = require("express");
const router = express();
const index = require("./router/index.js");
const youtube = require("./router/youtube.js");
const mars = require("./router/mars.js");
const port = 8086;

//router.enable("trust proxy");
router.set("json spaces", 2);

router.use("/", index);
router.use("/youtube", youtube);
router.use("/mars", mars);

router.listen(port, async() => {
    console.log(`Active Server on Port ${port}`);
});

module.exports = router;
