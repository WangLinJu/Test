const headConfig = require('./config/headConfig');
const pluginConfig = require('./config/pluginConfig');
const navConfig = require('./config/navConfig');
const sidebarConfig = require('./config/sidebarConfig');

module.exports = {
    head: headConfig,
    plugins: pluginConfig,
    themeConfig: {
        lastUpdated: '最后更新时间',
        nav: navConfig,
        sidebar: sidebarConfig
    }
}