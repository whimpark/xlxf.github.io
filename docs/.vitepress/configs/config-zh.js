
const BASEPATH="https://xlxf.cn"
// const BASEPATH="http://localhost:5173"
// const BASEPATH=""


module.exports = {
  outline: {
    label: "目录大纲"
  },
  lastUpdatedText: "最近更新",

  nav: [
    { text: '首页', link: `${BASEPATH}/zh/index` },
    {
      text: '学坊笔记',
      items: [
        { text: 'Elasticsearch', link: `${BASEPATH}/zh/article/elasticsearch/elasticsearch-guifan` },
        { text: 'Kafka', link: `${BASEPATH}/zh/article/kafka/kafka-base` },
        { text: 'Java', link: `${BASEPATH}/zh/article/java/jdk-performance` },
        { text: 'Kubernetes' , link: `${BASEPATH}/zh/article/kubernetes/k8s-base` }, 
        { text: '发展构思', link: `${BASEPATH}/zh/note/997-231008-idea` },
        { text: '股票预测', link: `${BASEPATH}/zh/note/996-231008-stock` }
      ]
    },
    {
      text: '技术文档',
      items: [
        { text: 'OpenAI', link: `${BASEPATH}/document/openai/document/introduction` },
        { text: 'ViteJS', link: `${BASEPATH}/document/vitejs/guide/` },
        { text: 'VitePress', link: `${BASEPATH}/document/vitepress/guide/what-is-vitepress` },
      ]
    },
    {
      text: '热点资讯',
      items: [
        { text: '百科资讯', link: `${BASEPATH}/zh/news/wikipedia/index` },
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
              { link: `${BASEPATH}/zh/article/elasticsearch/elasticsearch-guifan`, text: '基本规范' },
              { link: `${BASEPATH}/zh/article/elasticsearch/elasticsearch-guihua`, text: '资源规划' }, 
              { link: `${BASEPATH}/zh/article/elasticsearch/elasticsearch-config`, text: '核心配置' }, 
              { link: `${BASEPATH}/zh/article/elasticsearch/elasticsearch-client`, text: '客户端' },
            ]
          },
          {
            text: 'Kafka',
            items: [
              { link: `${BASEPATH}/zh/article/kafka/kafka-base`, text: '基础知识' }, 
            ]
          },
          {
            text: 'Java',
            items: [
              { link: `${BASEPATH}/zh/article/java/jdk-performance`, text: 'JDK性能分析' }, 
            ]
          },
          {
            text: 'Kubernetes',
            items: [
              { link: `${BASEPATH}/zh/article/kubernetes/k8s-base`, text: '基础概念' }, 
            ]
          },
          { link: `${BASEPATH}/zh/note/996-231008-stock`, text: '股票预测' },
          { link: `${BASEPATH}/zh/note/996-231008-seo`, text: '广告联盟' },
          { link: `${BASEPATH}/zh/note/996-231009-webservice`, text: 'WebService' },
          { link: `${BASEPATH}/zh/note/997-231008-vitepress`, text: 'VitePress' },
          { link: `${BASEPATH}/zh/note/997-231008-vuepress`, text: 'VuePress' },
          { link: `${BASEPATH}/zh/note/997-231008-idea`, text: '发展构思' },
        ]
      }
    ],
    "/zh/news/": [
      {
        text: '热点资讯',
        items: [
          {
            text: '百科资讯',
            items: [ 
              { link: `${BASEPATH}/zh/news/wikipedia/2023/10/wikipedia-20231013.md`, text: '20231013' }, 
              { link: `${BASEPATH}/zh/news/wikipedia/2023/10/wikipedia-20231012.md`, text: '20231012' }, 
            ]
          },
        ]
      }
    ],
    "/zh/document/": [
      {
        text: '技术文档',
        items: [
          { text: 'OpenAI', link: `${BASEPATH}/document/openai/document/introduction` },
          { text: 'ViteJS', link: `${BASEPATH}/document/vitejs/guide/` },
          { text: 'VitePress', link: `${BASEPATH}/document/vitepress/guide/what-is-vitepress` },
        ]
      }
    ]
  },
  footer: {
    message: '<a href="/zh/site/about.html">关于我们</a> | <a href="/zh/site/contact.html">联系我们</a> | <a href="/zh/site/disclaimer.html">免责声明</a> | <a href="/zh/site/privacy.html">隐私条款</a>',
    copyright: 'Copyright © 2018-present xlxf.cn ICP备案 '
  },
  docFooter: { prev: "上一篇", next: "下一篇" }
}


