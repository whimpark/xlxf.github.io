module.exports = {
    title: '西岭项目',
    base:"/dist/",
    description: 'love movies',
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
            {
              title: '项目文章',
              path: '/article/content',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1
              children: [ 
                {
                  title: '百度',
                  path: '/article/baidu/content',
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 0,    // 可选的, 默认值是 1
                  children: [ 
                    '/article/baidu/997-231008-baidu-ad', 
                    '/article/baidu/997-231008-baidu-bjh',  
                  ],
                }, 
                '/article/google/content',  
                '/article/weixin/content',  
              ],
            },
            {
              title: '项目笔记',
              path: '/note/index',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1
              children: [
                "/note/test/997-231008-idea",
                '/note/997-231008-vuepress', 
              ],
            }
          ]
      }
    
}


