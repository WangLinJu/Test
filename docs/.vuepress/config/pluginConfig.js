const moment = require('moment');
const secret = require('./secret')
moment.locale("zh-cn")
module.exports = {
    '@vuepress/last-updated':
        {
            transformer: (timestamp) => {
                return moment(timestamp).format("L")
            }
        },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': secret.ga // UA-00000000-0
    }

}