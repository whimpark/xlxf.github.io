

module.exports = {
  outline: {
    label: "目录大纲"
  },
  lastUpdatedText: "最近更新",

  nav: [
    { text: '首页', link: '/zh/index' },
    {
      text: '学坊笔记',
      items: [
        { text: 'Elasticsearch', link: '/zh/article/elasticsearch/elasticsearch-guifan' },
        { text: '发展构思', link: '/zh/note/997-231008-idea' },
        { text: '股票预测', link: '/zh/note/996-231008-stock' },
        { text: 'VuePress', link: '/zh/note/997-231008-vuepress' }
      ]
    },
    {
      text: '热点资讯',
      items: [
        { text: '百科资讯', link: '/zh/news/wikipedia/index' },
      ]
    }
  ],

  sidebar: {
    "/zh/": [
      {
        text: '学坊笔记',
        items: [
          {
            text: 'Elasticsearch',
            items: [
              { link: '/zh/article/elasticsearch/elasticsearch-guifan', text: '基本规范' },
              { link: '/zh/article/elasticsearch/elasticsearch-guihua', text: '资源规划' }, 
            ]
          },
          { link: '/zh/note/996-231008-stock', text: '股票预测' },
          { link: '/zh/note/996-231008-seo', text: '广告联盟' },
          { link: '/zh/note/996-231009-webservice', text: 'WebService' },
          { link: '/zh/note/997-231008-vitepress', text: 'VitePress' },
          { link: '/zh/note/997-231008-vuepress', text: 'VuePress' },
          { link: '/zh/note/997-231008-idea', text: '发展构思' },
        ]
      }
    ],
    "/zh/news/": [
      {
        text: '热点资讯',
        items: [
          { link: '/zh/news/wikipedia/index', text: '百科资讯',  }, 
        ]
      }
    ]
  },
  footer: {
    message: '<a href="/zh/site/about.html">关于我们</a> | <a href="/zh/site/contact.html">联系我们</a>',
    copyright: 'Copyright © 2018-present xlxf.cn ICP备案 '
  },
  docFooter: { prev: "上一篇", next: "下一篇" }
}


