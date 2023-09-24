module.exports = {
    title: 'XLXM',
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
              title: 'Group 1',   // 必要的
              path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/',
                '/web/vuepress'
              ]
            },
            {
              title: '未分类文章',
              path: '/temp/',   
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/', 
                '/temp/readme2',
                '/temp/vuepress'
              ],
            }
          ]
      }
    
}


