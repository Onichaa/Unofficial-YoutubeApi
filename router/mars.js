__path = process.cwd();
const express = require("express");
const router = express.Router();
const axios = require('axios');

/*
const headers = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "https://www.marscode.com",
    "Cache-Control": "max-age=0, no-cache, no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Cookie": "store-idc=alisg; store-country-code=id; store-country-code-src=uid; i18next=en; passport_csrf_token=1a504b01dc7f93416ed7cd81aba4a0c7; passport_csrf_token_default=1a504b01dc7f93416ed7cd81aba4a0c7; uid_tt=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; uid_tt_ss=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; sid_tt=57a7e17cac815bc817e637b3ab884c80; sessionid=57a7e17cac815bc817e637b3ab884c80; sessionid_ss=57a7e17cac815bc817e637b3ab884c80; is_staff_user=false; marscode-ui-theme=dark; gfkadpd=572196,31453; _gcl_au=1.1.1954536921.1730769369; ttwid=1%7ChNvMmiV2_wE9VE6qHS459ebd8jAZprnNhv5lclWnmRE%7C1730769441%7C3ee807c89316d27683beca0a1857c29b31f7358608c15db8455e80716c10d435; odin_tt=690fa43c205b6b85519952dc24e5bdfce51b0bb51396a4b08f762b442a42777e8e75ad2a1d5ac74c6469f960b3b02148a1427eb18269f0110458ebd23e47d98c; passport_auth_status=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; passport_auth_status_ss=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; sid_guard=57a7e17cac815bc817e637b3ab884c80%7C1730769448%7C5184000%7CSat%2C+04-Jan-2025+01%3A17%3A28+GMT; sid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; ssid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; X-Cloudide-Session=6M1c--UFTR5WLbb2DLEAS7lrfRpCX49mLuGwqm583q8=.1804eda4c061db62; __tea_cache_tokens_573425={%22_type_%22:%22default%22%2C%22user_unique_id%22:%227398784566763439121%22%2C%22timestamp%22:1730769457455}; marscode_user_info={%22name%22:%22takimtod%22%2C%22gender%22:%220%22%2C%22avatar%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22%2C%22description%22:%22%22%2C%22userId%22:%227398784566763439121%22%2C%22tenantId%22:%221dknw951n5p5vn%22%2C%22ScreenName%22:%22takimtod%22%2C%22Gender%22:%220%22%2C%22AvatarUrl%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22%2C%22UserID%22:%227398784566763439121%22%2C%22Description%22:%22%22%2C%22TenantID%22:%221dknw951n5p5vn%22%2C%22RegisterTime%22:%222024-08-03T05:43:48.998Z%22%2C%22LastLoginTime%22:%222024-11-05T01:17:28.666Z%22%2C%22LastLoginType%22:%22google%22%2C%22AuditInfo%22:%22{%5C%22audit_status%5C%22:2%2C%5C%22is_auditing%5C%22:false%2C%5C%22last_modify_time%5C%22:1722663878%2C%5C%22unpass_reason%5C%22:%5C%22%5C%22}%22%2C%22Region%22:%22Singapore-Central%22}; marscode_auth_token_IDE={%22token%22:%22eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNzM5ODc4NDU2Njc2MzQzOTEyMSIsInNvdXJjZSI6InNlc3Npb24iLCJzb3VyY2VfaWQiOiI2TTFjLS1VRlRSNVdMYmIyRExFQVM3bHJmUnBDWDQ5bUx1R3dxbTU4M3E4PS4xODA0ZWRhNGMwNjFkYjYyIiwidGVuYW50X2lkIjoiMWRrbnc5NTFuNXA1dm4iLCJ0eXBlIjoidXNlciJ9LCJleHAiOjE3MzA4OTI0MTQsImlhdCI6MTczMDg2MzYxNH0.a0uPGfMfeALMPnSQJrnUt4YVFwv8SXU2nXhjFxeMs88EymlbLBYlRUEdBlsBNpjCgII47g582D9AgBQx_Yf0uJrgf7Mg1lHXGBGZ2fit7VyCadbSZulkM2Sy5M3cxVw9NlzNfu9IcsNtFQJPeHXgTyqnavN1Et_bRBTmS2RLcj26_89e1r1zrlPJiFYp-MUIpb_nhc5lHzkm_I3pkaNF1dhLhGUox0vZHh1iS_Jli6pHIdDWWssg1ECcyLep9P1Fz3NmAls4YNxbf9rspI1L2WTDOzBsy1Y4GNA3uIS2O8vasCqby-TBdiYi0je2aA3qW_RQdfTpE5V1_NBlrLkenzkr3P4W0gicIoVxGX1WTpXXD04iWhDcXeqxC9oyzG-0qyNqUoBzkH9BqA_Le8ZTBcS4spW_Y8pGz-8ey8SXV-9JAsTSNkdfsyrx4iGFS44L79mqS2ZNT-ofnHoaAwHKWBEpIczde6NLKz8jnI1hlECi3OXYAKoBP7leHMMEp6HVbLlY8E7eU9cCg6kcanL4NeRKDiG8n_fDk9BjnwgKViV4B6vxpq3YLHCsBiaLYeObj8JQSou-1CefShkuzU0t2UM3mUCgiLuJTOWMd2MfnHOehwTpJSUhGaQGSVI6l2H9_BibZR0bMiqOYuoKpvinHyvmLiKiihWKUG_wKL9hxRg%22%2C%22expiredAt%22:%222024-11-06T11:26:54.198918157Z%22%2C%22userId%22:%227398784566763439121%22}",
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
    "Accept": "/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
    };
*/

const headers = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
    "content-length": "3574",
    "content-type": "text/plain;charset=UTF-8",
    "cookie": "store-idc=alisg; store-country-code=id; store-country-code-src=uid; i18next=en; passport_csrf_token=1a504b01dc7f93416ed7cd81aba4a0c7; passport_csrf_token_default=1a504b01dc7f93416ed7cd81aba4a0c7; uid_tt=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; uid_tt_ss=81371f6f558b4296cc150204953f5c736c90d81c329f1ff1c3d104ff5c402765; sid_tt=57a7e17cac815bc817e637b3ab884c80; sessionid=57a7e17cac815bc817e637b3ab884c80; sessionid_ss=57a7e17cac815bc817e637b3ab884c80; is_staff_user=false; marscode-ui-theme=dark; gfkadpd=572196,31453; _gcl_au=1.1.1954536921.1730769369; ttwid=1%7ChNvMmiV2_wE9VE6qHS459ebd8jAZprnNhv5lclWnmRE%7C1730769441%7C3ee807c89316d27683beca0a1857c29b31f7358608c15db8455e80716c10d435; odin_tt=690fa43c205b6b85519952dc24e5bdfce51b0bb51396a4b08f762b442a42777e8e75ad2a1d5ac74c6469f960b3b02148a1427eb18269f0110458ebd23e47d98c; passport_auth_status=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; passport_auth_status_ss=713c564cb4c0250f98f433da279da52c%2C322d9f88b5fc4585cddb3db84983664f; sid_guard=57a7e17cac815bc817e637b3ab884c80%7C1730769448%7C5184000%7CSat%2C+04-Jan-2025+01%3A17%3A28+GMT; sid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; ssid_ucp_v1=1.0.0-KGYzMGI2OGQ5ZWIxNTdjNDY5YjQ2YjRkY2IzOTdmMTRiNjRjZTE5NTIKIAiRiM_8zuvw1mYQqOSluQYYpPYiIAwwk4e3tQY4CEASEAMaA3NnMSIgNTdhN2UxN2NhYzgxNWJjODE3ZTYzN2IzYWI4ODRjODA; X-Cloudide-Session=6M1c--UFTR5WLbb2DLEAS7lrfRpCX49mLuGwqm583q8=.1804eda4c061db62; __tea_cache_tokens_573425={%22_type_%22:%22default%22%2C%22user_unique_id%22:%227398784566763439121%22%2C%22timestamp%22:1730769457455}; marscode_user_info={%22name%22:%22takimtod%22%2C%22gender%22:%220%22%2C%22avatar%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22%2C%22description%22:%22%22%2C%22userId%22:%227398784566763439121%22%2C%22tenantId%22:%221dknw951n5p5vn%22%2C%22ScreenName%22:%22takimtod%22%2C%22Gender%22:%220%22%2C%22AvatarUrl%22:%22https://sf16-passport-sg.ibytedtos.com/img/user-avatar-alisg/f9caee44462831efdcfdaec5307e3fee~128x128.image%22%2C%22UserID%22:%227398784566763439121%22%2C%22Description%22:%22%22%2C%22TenantID%22:%221dknw951n5p5vn%22%2C%22RegisterTime%22:%222024-08-03T05:43:48.998Z%22%2C%22LastLoginTime%22:%222024-11-05T01:17:28.666Z%22%2C%22LastLoginType%22:%22google%22%2C%22AuditInfo%22:%22{%5C%22audit_status%5C%22:2%2C%5C%22is_auditing%5C%22:false%2C%5C%22last_modify_time%5C%22:1722663878%2C%5C%22unpass_reason%5C%22:%5C%22%5C%22}%22%2C%22Region%22:%22Singapore-Central%22}; marscode_auth_token_IDE={%22token%22:%22eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNzM5ODc4NDU2Njc2MzQzOTEyMSIsInNvdXJjZSI6InNlc3Npb24iLCJzb3VyY2VfaWQiOiI2TTFjLS1VRlRSNVdMYmIyRExFQVM3bHJmUnBDWDQ5bUx1R3dxbTU4M3E4PS4xODA0ZWRhNGMwNjFkYjYyIiwidGVuYW50X2lkIjoiMWRrbnc5NTFuNXA1dm4iLCJ0eXBlIjoidXNlciJ9LCJleHAiOjE3MzA4OTMwMzYsImlhdCI6MTczMDg2NDIzNn0.qakbLsSdU3vo5Rr6c0dzB_FYirKvQI30eENwNtOaVAR5FsiuOBEMm1KbMbg-S5wshkTSnC5f0pUCu_4Lj0XMAZCrH8D96IXEaK24sAsxAwRlPWdj9gd0p6YbK2IXxo7IbC-Z_k9buCZTQb9HbzUsuhN4zqP3_VW8yazTU2aAyMN4cW2R_cehujbp7_6yb_0uUdmVwL2-FtMEP9WmFvFWiR9_iiZn5EB3ZjxSMpMMe-z4XfjkNZ1iZda6SA8fqKMiZbyO5C_fj4jUwpaxXbJooCtajJt8G-jX23PsJ5Y_9yXuP8bEQG7kWCfz8MtyiT2ItJpDn1MdBpP8D6cltLaMJtXOjz7rLZSYi-6vDvoigoet_LrdT9d7m0CFEYfoof0yzqtTGxs-6Zb6MnVIZbsE-bfWz_iZxjjJtGbC_ZfKdC_naD4ACO8fdTntNvbhfK2vTXKPMaDy01EhoX_6IZR4ABkluvGi2XiKEypQ8kcALBrrim8F1CXcbZZykPI71Zi8qyl0uwvPPWCOl-MAOrDSnFNtXQT6szoYMw8Vuh3cFYIcwU3w4oKBqj-CBRlVXUbehOtYOolr7vBq7on4FWIhFYTxD21XjdRtNbPXmPfoEh1DOFgen8TZFN7vADtwTx0Q3OCLvgNTkCpkyT6UK7fAJ9Mf99A_zP3ke9l7tAuD0_c%22%2C%22expiredAt%22:%222024-11-06T11:37:16.937801454Z%22%2C%22userId%22:%227398784566763439121%22}",
    "origin": "https://www.marscode.com",
    "priority": "u=1, i",
    "referer": "https://www.marscode.com/ide/65k0v9v2k5ryvl",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "traceparent": "03-156d8fb4328d61fe533db063d32242c8-9dfa8a78411d4a50-01",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
  };

router.get("/", async(req, res) => {
    res.status(400).json({
        author: "FatihArridho",
        message: "Ooopss, you can go to router"
    })
})

router.get('/marscode', async (req, res) => {
    try {
        const response = await axios({
            url: "https://www.marscode.com/ide/65k0v9v2k5ryvl",
            method: 'GET',
            headers: headers
        });
        
        // Mengirimkan data dari respons ke klien
        res.json(response.data);
        console.log("sukses")
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data : 'Terjadi kesalahan saat mengambil data.';
        res.status(500).send(errorMessage);
    }
});

module.exports = router;
