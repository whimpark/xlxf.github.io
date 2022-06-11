
const { getFeSideBar } = require('./sidebar/FeSideBar.js')
const { getBeJavaSideBar,getBeSpringSideBar,getBeBusinessSideBar } = require('./sidebar/BeSideBar.js')
const { getArchSideBar } = require('./sidebar/ArchSideBar.js') 
import GLOBAL from "./global.js"

module.exports = {
    title: 'xlxf.cn',
    description: '学习记录，欢迎指正',
    base: GLOBAL.base,
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端知识',  items: [
                    { text: '前端基础', link: '/fe/', activeMatch: '/fe/' },
                    { text: 'NodeJS', link: '/fe/nodejs/', activeMatch: '/fe/nodejs/' },
                    { text: 'VueJS', link: '/fe/vuejs/', activeMatch: '/fe/vuejs/' },
                    { text: 'Webpack', link: '/fe/webpack/', activeMatch: '/fe/webpack/' },
                ]
            },
            {
                text: '后端知识', items: [
                    { text: '后端基础', link: '/be/', activeMatch: '/be/' },
                    { text: 'Java', link: '/be/java/', activeMatch: '/be/java/' },
                    { text: 'Spring', link: '/be/spring/', activeMatch: '/be/spring/' },
                    { text: '业务场景', link: '/be/business/', activeMatch: '/be/business/' },
                ]
            },
            {
                text: '架构知识', items: [
                    { text: '架构基础', link: '/arch/', activeMatch: '/arch/' },
                    { text: '架构理论', link: '/arch/theory/', activeMatch: '/arch/theory/' },
                    { text: '架构实践', link: '/arch/pratice/', activeMatch: '/arch/pratice/' },
                ]
            }
        ],
        
        // 侧边导航
        sidebar: {
            '/fe/': getFeSideBar(),
            '/be/java/': getBeJavaSideBar(),
            '/be/spring/': getBeSpringSideBar(),
            '/be/business/': getBeBusinessSideBar(),
            '/arch/': getArchSideBar(), 
        }
    },
}



