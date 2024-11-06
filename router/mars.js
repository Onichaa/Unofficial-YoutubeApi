__path = process.cwd();
const express = require("express");
const router = express.Router();
const axios = require('axios');


const headers = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "https://www.marscode.com",
    "Cache-Control": "max-age=0, no-cache, no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Date": "Wed, 06 Nov 2024 01:08:23 GMT",
    "Expires": "Wed, 06 Nov 2024 01:08:23 GMT",
    "Pragma": "no-cache",
    "Server": "TLB",
    "Server-Timing": "cdn-cache; desc=MISS, edge; dur=31, origin; dur=75",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Upstream-Caught": "1730855303122737",
    "X-Akamai-Request-Id": "75b105f.192cb54e",
    "X-Cache": "TCP_MISS from a23-195-104-84.deploy.akamaitechnologies.com (AkamaiGHost/11.7.0.1-02978ab5588da6405be9084889a03f78) (-)",
    "X-Cache-Remote": "TCP_MISS from a23-47-190-183.deploy.akamaitechnologies.com (AkamaiGHost/11.7.0.1-02978ab5588da6405be9084889a03f78) (-)",
    "X-Origin-Response-Time": "75,23.47.190.183",
    "X-Parent-Response-Time": "103,23.195.104.84",
    "X-Tt-Logid": "2024110601082260A6A3961CFA5F4D05CA",
    "X-Tt-Trace-Host": "016265797f3b98f2efe36d2593b05a2b999710c30ed88c360c01e35a8fda0dd45b8a8851ed7a5da56b74f428d6bef5ea76712b2e488c0beb1a0fed8310cf68967ce21481f706820b17ff73aa01924dce1d8f1ed94480836aea55c4872cf8b2a92a",
    "X-Tt-Trace-Id": "00-24110601082260A6A3961CFA5F4D05CA-52F557B094180532-00",
    "X-Tt-Trace-Tag": "id=16;cdn-cache=miss;type=dyn",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
};

router.get("/", async(req, res) => {
    res.status(400).json({
        author: "FatihArridho",
        message: "Ooopss, you can go to router"
    })
})
// Endpoint untuk melakukan permintaan ke API
router.get('/marscode', async (req, res) => {
    try {
        const response = await axios({
            url: "https://www.marscode.com/ide/65k0v9v2k5ryvl",
            method: 'GET',
            headers: headers
        });
        
        // Mengirimkan data dari respons ke klien
        res.json(response.data);
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data : 'Terjadi kesalahan saat mengambil data.';
        res.status(500).send(errorMessage);
    }
});

module.exports = router;
