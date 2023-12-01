
const configEn=require("./configs/config-en.js")
const configZh=require("./configs/config-zh.js")
 
 
module.exports = {
  lang: "zh",
  base:"/",
  lastUpdated: false,
  appearance: "light", 
  ignoreDeadLinks: true,
  locales: {
    root: { 
      title: '小鹿学坊',
      description: '一个与时俱进的互联网学习空间',
      themeConfig: configZh
    },
    "zh": {
      label: '中文', 
      title: '小鹿学坊',
      description: '一个与时俱进的互联网学习空间',
      themeConfig: configZh
    },
    // "en": {
    //   label: 'English', 
    //   title: 'XiaoLu School',
    //   description: 'A network school',
    //   themeConfig: configEn
    // }
  },
  

  // vitepress对自动广告的适应比较差
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
    aside: false,
    outline: {
      level: "deep", 
    },    


    locales: {
      // 原本 themeConfig 下所有需要转换的信息通过手动写两套配置的方式全部处理一下
      // 例如 
      // 中文展示 docFooter: { prev: "上一页", next: "下一页" }
      // 英文展示 docFooter: { prev: "Pre page", next: "Next page" }
      "/zh": configZh,
      "/en/": configEn
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/whimpark/xlxf.github.io' }
    // ],
    search: {
      provider: 'local'
    }
  },
  sitemap: {
    hostname: 'https://xlxf.cn'
  }
}


