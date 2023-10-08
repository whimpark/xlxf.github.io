module.exports = {
    title: '小鹿学坊',
    base:"/",
    description: '一个与时俱进的互联网学习空间',
    head: [
      [
        "script",
        {
          "client": "ca-pub-6579111049316949",
          async: true,
          crossorigin: "anonymous",
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6579111049316949"
        }
      ]
    ],
 
    configureWebpack: {
        resolve: {
            alias: {
            '@docs': './docs'
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        sidebar: [
            // {
            //   title: '鹿坊文章',
            //   path: '/article/content',
            //   collapsable: false, // 可选的, 默认值是 true,
            //   sidebarDepth: 0,    // 可选的, 默认值是 1
            //   children: [ 
            //     {
            //       title: '百度',
            //       path: '/article/baidu/content',
            //       collapsable: false, // 可选的, 默认值是 true,
            //       sidebarDepth: 0,    // 可选的, 默认值是 1
            //       children: [ 
            //         '/article/baidu/997-231008-baidu-ad', 
            //         '/article/baidu/997-231008-baidu-bjh',  
            //       ],
            //     }, 
            //     '/article/google/content',  
            //     '/article/weixin/content',  
            //   ],
            // },
            {
              title: '小鹿笔记',
              path: '/note/index',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1
              children: [
                "/note/996-231008-seo",
                "/note/996-231008-stock",
                '/note/997-231008-vuepress', 
                "/note/997-231008-idea",
              ],
            }
          ]
      }
    
}


