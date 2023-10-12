 

function getChineseThemeConfig(){
  return {
    outline: { 
      label: "目录大纲"
    },  
    lastUpdatedText: "最近更新",    

    nav: [
      { text: '首页', link: '/zh/index' }, 
      {
        text: '学坊笔记',
        items: [
          { text: '发展构思', link: '/zh/note/997-231008-idea' },
          { text: '股票预测', link: '/zh/note/996-231008-stock' }, 
          { text: 'VuePress', link: '/zh/note/997-231008-vuepress' }
        ]
      },
      {
        text: '最新资讯',
        items: [
          { text: '国际冲突', link: '/zh/news/999-231012-war' }, 
        ]
      }
    ],

    sidebar: [ 
      {
        text: '学坊笔记',
        items: [
          { link: '/zh/note/996-231008-stock',text: '股票预测' }, 
          { link: '/zh/note/996-231008-seo',text: '广告联盟' },
          { link: '/zh/note/996-231009-webservice',text: 'WebService' },
          { link: '/zh/note/997-231008-vitepress',text: 'VitePress' },
          { link: '/zh/note/997-231008-vuepress',text: 'VuePress' },
          { link: '/zh/note/997-231008-idea',text: '发展构思' },  
        ]
      }
    ],    
    footer: {
      message: '<a href="/zh/site/about.html">关于我们</a> | <a href="/zh/site/contact.html">联系我们</a>',
      copyright: 'Copyright © 2018-present xlxf.cn ICP备案 '
    },
    docFooter: { prev: "上一篇", next: "下一篇" }
  }
}




function getEnglishThemeConfig(){
  return {
    outline: { 
      label: "Content"
    },  
    lastUpdatedText: "Last Updated",   
    nav: [
      { text: 'Home', link: '/en/index' }, 
      {
        text: 'Note',
        items: [
          { text: 'Idea', link: '/en/note/997-231008-idea' },
          { text: 'Stock Predict', link: '/en/note/996-231008-stock' }, 
          { text: 'VuePress', link: '/en/note/997-231008-vuepress' }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'International Conflict', link: '/en/news/999-231012-war' }, 
        ]
      }
    ],

    sidebar: [ 
      {
        text: 'Note',
        items: [
          { link: '/en/note/996-231008-stock',text: 'Stock Predict' }, 
          { link: '/en/note/996-231008-seo',text: 'Adsense' },
          { link: '/en/note/996-231009-webservice',text: 'WebService' },
          { link: '/en/note/997-231008-vitepress',text: 'VitePress' },
          { link: '/en/note/997-231008-vuepress',text: 'VuePress' },
          { link: '/en/note/997-231008-idea',text: 'Idea' },  
        ]
      }
    ],
    
    footer: {
      message: '<a href="/en/site/about.html">About</a> | <a href="/en/site/contact.html">Contact</a>',
      copyright: 'Copyright © 2018-present xlxf.cn ICP备案 '
    },
    docFooter: { prev: "Previos page", next: "Next page" }
  }
}




 
module.exports = {
    base:"/",
    lastUpdated: false,
    appearance: "light", 

    rewrites: {
      'index.md': '/zh/index.md'
    },
    locales: {
      "zh": {
        label: '中文', 
        title: '小鹿学坊',
        description: '一个与时俱进的互联网学习空间',
        themeConfig: getChineseThemeConfig()
      },
      "en": {
        label: 'English', 
        title: 'XiaoLu School',
        description: 'A network school',
        themeConfig: getEnglishThemeConfig()
      }
    },
   

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
        logo: '/favicon.svg',
        aside: true,
        outline: {
          level: "deep", 
        },    


        locales: {
          // 原本 themeConfig 下所有需要转换的信息通过手动写两套配置的方式全部处理一下
          // 例如 
          // 中文展示 docFooter: { prev: "上一页", next: "下一页" }
          // 英文展示 docFooter: { prev: "Pre page", next: "Next page" }
          "/zh": getChineseThemeConfig(),
          "/en/": getEnglishThemeConfig()
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/whimpark/xlxf.github.io' }
        ],
        search: {
          provider: 'local'
        }
      },
      sitemap: {
        hostname: 'https://xlxf.cn'
      }
}


