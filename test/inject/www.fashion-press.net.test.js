const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("news/56100", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/news/56100",
        "www.fashion-press.net-news-56100/",
        [
            {
                "url": "https://www.fashion-press.net/img/news/56100/top.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/DWM.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/XZw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/32U.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/GW0.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/gEE.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/hn8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/lFU.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/sY0.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/g8Y.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/cpU.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/yEw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/es8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/n0w.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/FLw.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/5Uk.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/T3Y.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/Jcg.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/hd8.jpg"
            },
            {
                "url": "https://www.fashion-press.net/img/movies/23487/vEE.jpg"
            }
        ]);
});

test("collections/13552", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/collections/13552",
        "www.fashion-press.net-collections-13552/",
        dummyItems(60));
});

test("snaps/5485", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.fashion-press.net/snaps/5485",
        "www.fashion-press.net-snaps-5485/",
        [
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_-rQ.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/-rQ.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_jZo.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/jZo.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_cp8.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/cp8.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_Mrc.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/Mrc.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_hLw.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/hLw.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_Xjg.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/Xjg.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_1XI.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/1XI.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_SPE.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/SPE.jpg"
            },
            {
                "retries": [
                    "https://www.fashion-press.net/img/snaps/5485/w150_q2Y.jpg"
                ],
                "url": "https://www.fashion-press.net/img/snaps/5485/q2Y.jpg"
            }
        ]);
});
