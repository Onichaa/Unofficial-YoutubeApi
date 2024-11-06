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
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36',
    "Cookie": "store-idc=alisg; store-country-code=id; store-country-code-src=uid; i18next=en; passport_csrf_token=1a504b01dc7f93416ed7cd81aba4a0c7; passport_csrf_token_default=1a504b01dc7f93416ed7cd81aba4a0c7; uid_tt=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; uid_tt_ss=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; sid_tt=57a7e17cac815bc817e637b3ab884c80; sessionid=57a7e17cac815bc817e637b3ab884c80; sessionid_ss=57a7e17cac815bc817e637b3ab884c80; is_staff_user=false; marscode-ui-theme=dark; gfkadpd=572196,31453; _gcl_au=1.1.1954536921.1730769369; ttwid=1%7ChNvMmiV2_wE9VE6qHS459ebd8jAZprnNhv5lclWnmRE%7C1730769441%7C3ee807c89316d27683beca0a1857c29b31f7358608c15db8455e80716c10d435; odin_tt=690fa43c205b6b85519952dc24e5bdfce51b0bb51396a4b08f762b442a42777e8e75ad2a1d5ac74c6469f960b3b02148a1427eb18269f0110458ebd23e47d98c; passport_auth_status=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; passport_auth_status_ss=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; sid_guard=57a7e17cac815bc817e637b3ab884c80%7C1730769448%7C5184000%7CSat%2C+04-Jan-2025+01%3A17%3A28+GMT; sid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; ssid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; X-Cloudide-Session=6M1c--UFTR5WLbb2DLEAS7lrfRpCX49mLuGwqm583q8=.1804eda4c061db62; __tea_cache_tokens_573425={%22_type_%22:%22default%22%2C%22user_unique_id%22:%227398784566763439121%22%2C%22timestamp%22:1730769457455}; marscode_user_info={%22name%22:%22takimtod%22%2C%22gender%22:%220%22%2C%22avatar%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22%2C%22description%22:%22%22%2C%22userId%22:%227398784566763439121%22%2C%22tenantId%22:%221dknw951n5p5vn%22%2C%22ScreenName%22:%22takimtod%22%2C%22Gender%22:%220%22%2C%22Description%22:%22%22%2C%22TenantId%22:%221dknw951n5p5vn%22%2C%22Avatar%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22}; __tea_sdk_cache_tokens_573425={%22_user_unique_id%22:%227398784566763439121%22%2C%22sessionid%22:%2257a7e17cac815bc817e637b3ab884c80%22}"
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
