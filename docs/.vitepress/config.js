module.exports = {
    // lang: "zh-CN",
    title: '小鹿学坊',
    base:"/",
    description: '一个与时俱进的互联网学习空间',
    lastUpdated: true,
    appearance: "light", 
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
 
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        aside: true,
        outline: {
          level: "deep",
          label: "目录大纲"
        },  
        lastUpdatedText: "最近更新",  
        nav: [
          { text: '首页', link: '/index' },
          { text: '关于我们', link: '/site/about' },
          {
            text: '技术文章',
            items: [
              {
                // Title for the section.
                text: '站点建设',
                items: [
                  { text: 'VitePress', link: '/note/997-231008-vitepress' },
                  { text: 'VuePress', link: '/note/997-231008-vuepress' }
                ]
              }
            ]
          }
        ],
 
        sidebar: [ 
          // {
          //   title: '小鹿笔记',
          //   path: '/note/index',
          //   collapsable: false, // 可选的, 默认值是 true,
          //   sidebarDepth: 0,    // 可选的, 默认值是 1
          //   children: [
          //     "/note/996-231008-seo",
          //     "/note/996-231008-stock",
          //     '/note/997-231008-vuepress', 
          //     "/note/997-231008-idea",
          //   ],
          // }
          
          {
            text: '小鹿笔记',
            items: [
              { link: '/note/996-231008-stock',text: '股票预测' }, 
              { link: '/note/996-231008-seo',text: '广告联盟' },
              { link: '/note/996-231009-webservice',text: 'WebService' },
              { link: '/note/997-231008-vitepress',text: 'VitePress' },
              { link: '/note/997-231008-vuepress',text: 'VuePress' },
              { link: '/note/997-231008-idea',text: '发展构思' },  
            ]
          }
        ],
        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/whimpark/xlxf.github.io' }
        // ],
        footer: {
          message: 'ICP备案',
          copyright: 'Copyright © 2018-present xlxf.cn'
        },
        search: {
          provider: 'local'
        }
      },
      sitemap: {
        hostname: 'https://xlxf.cn'
      }
}


