const utils = require("../utils.js");
const getLargeImg = function (url) {
    return {url: utils.filterTrailingResolutionNumbers(url), retries: [url]};
};

module.exports = {
    inject: function () {
        let o = require("./return-message.js").init();
        // images in article
        utils.pushArray(o.images,
            utils.findImagesWithCssSelector(document,
                "#main article #the-content p img", getLargeImg)
        );
        // images list at the end of article
        // utils.pushArray(o.images,
        //     utils.findImagesWithCssSelector(document,
        //         "#mainContents article .picture.list figure img", getLargeImg)
        // );
        return o;
    },
    host: "www.edgeline-tokyo.com",
};
