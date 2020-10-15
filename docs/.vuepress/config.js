const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
    head: [
        ['link', {rel: 'icon', href: '/assets/img/hero.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/favicon128.jpg'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/favicon128.jpg'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format("L")
                }
            }
        ],
        [
            '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
        ]
    ],
    themeConfig: {
        lastUpdated: '最后更新时间',
    }
}