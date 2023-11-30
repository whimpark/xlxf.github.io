 
import { defineConfig, type DefaultTheme } from 'vitepress'

 
export default defineConfig({
  lang: 'en-US',
  title: 'OpenAI',
  description: 'OpenAI documents',
  base:"/document/openai",
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true
  },

 

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/openai.svg' }], 
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'xlxf and openai' }], 
    [
      "script",
      {
        "client": "ca-pub-6579111049316949",
        async: "true",
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6579111049316949"
      }
    ]
  ],

  themeConfig: {
    logo: { src: '/openai.svg', width: 24, height: 24 },

    nav: nav(),

    sidebar: {
      '/document/': { base: '/document/', items: document() },
      // '/api-reference/': { base: '/api-reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

 

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

 
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Document',
      link: '/document/introduction',
      activeMatch: '/document/'
    },
    {
      text: 'API Reference',
      link: '/reference/site-config',
      activeMatch: '/reference/'
    }, 
  ]
}

 
 
function document(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'GET STARTED',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Quickstart', link: 'quickstart' },
        { text: 'Models', link: 'models' },
        { text: 'Tutorials', link: 'tutorials' },
        { text: 'Changelog', link: 'changelog' }
      ]
    },
    {
      text: 'CAPABILITIES',
      collapsed: false,
      items: [
        { text: 'Text generation', link: 'text-generation' },
        { text: 'Function calling', link: 'function-calling' },
        { text: 'Embeddings', link: 'embeddings' },
        { text: 'Fine-tuning', link: 'fine-tuning' },
        { text: 'Image generation', link: 'image-generation' },
        { text: 'Vision', link: 'vision' },
        { text: 'Text-to-speech', link: 'text-to-speech' },
        { text: 'Speech-to-text', link: 'speech-to-text' },
        { text: 'Moderation', link: 'moderation' }, 
      ]
    },
    {
      text: 'ASSISTANTS',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'How Assistants work', link: 'how-assistants-work' },
        { text: 'Tools', link: 'tools' }, 
      ]
    },
    {
      text: 'GUIDES',
      collapsed: false,
      items: [
        { text: 'Prompt engineering', link: 'prompt-engineering' }, 
        { text: 'Production best practices', link: 'production-best-practices' }, 
        { text: 'Safety best practices', link: 'safety-best-practices' }, 
        { text: 'Rate limits', link: 'rate-limits' }, 
        { text: 'Error codes', link: 'error-codes' }, 
        { text: 'Libraries', link: 'libraries' }, 
        { text: 'Deprecations', link: 'deprecations' }, 
        { text: 'Policies', link: 'policies' },  
      ]
    }, 
    {
      text: 'CHATGPT',
      collapsed: false,
      items: [ 
        { text: 'Actions', link: 'actions' }, 
        { text: 'Plugins', link: 'plugins' },  
      ]
    }, 
  ]
}
 