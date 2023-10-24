import{_ as a,o as s,c as e,S as o}from"./chunks/framework.93883beb.js";const E=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-layout.md","filePath":"reference/default-theme-layout.md","lastUpdated":null}'),n={name:"reference/default-theme-layout.md"},l=o(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h1><p>You may choose the page layout by setting <code>layout</code> option to the page <a href="./frontmatter-config">frontmatter</a>. There are 3 layout options, <code>doc</code>, <code>page</code>, and <code>home</code>. If nothing is specified, then the page is treated as <code>doc</code> page.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">doc</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">doc</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Doc Layout <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;Doc Layout&quot;">​</a></h2><p>Option <code>doc</code> is the default layout and it styles the whole Markdown content into &quot;documentation&quot; look. It works by wrapping whole content within <code>vp-doc</code> css class, and applying styles to elements underneath it.</p><p>Almost all generic elements such as <code>p</code>, or <code>h2</code> get special styling. Therefore, keep in mind that if you add any custom HTML inside a Markdown content, those will get affected by those styles as well.</p><p>It also provides documentation specific features listed below. These features are only enabled in this layout.</p><ul><li>Edit Link</li><li>Prev Next Link</li><li>Outline</li><li><a href="./default-theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Page Layout <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;Page Layout&quot;">​</a></h2><p>Option <code>page</code> is treated as &quot;blank page&quot;. The Markdown will still be parsed, and all of the <a href="./../guide/markdown">Markdown Extensions</a> work as same as <code>doc</code> layout, but it wouldn&#39;t get any default stylings.</p><p>The page layout will let you style everything by you without VitePress theme affecting the markup. This is useful when you want to create your own custom page.</p><p>Note that even in this layout, sidebar will still show up if the page has a matching sidebar config.</p><h2 id="home-layout" tabindex="-1">Home Layout <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;Home Layout&quot;">​</a></h2><p>Option <code>home</code> will generate templated &quot;Homepage&quot;. In this layout, you can set extra options such as <code>hero</code> and <code>features</code> to customize the content further. Please visit <a href="./default-theme-home-page">Default Theme: Home Page</a> for more details.</p><h2 id="no-layout" tabindex="-1">No Layout <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;No Layout&quot;">​</a></h2><p>If you don&#39;t want any layout, you can pass <code>layout: false</code> through frontmatter. This option is helpful if you want a fully-customizable landing page (without any sidebar, navbar, or footer by default).</p><h2 id="custom-layout" tabindex="-1">Custom Layout <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;Custom Layout&quot;">​</a></h2><p>You can also use a custom layout:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">foo</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">foo</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>This will look for a component named <code>foo</code> registered in context. For example, you can register your component globally in <code>.vitepress/theme/index.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Foo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">enhanceApp</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Foo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">enhanceApp</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">app</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">, Foo)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21),t=[l];function p(c,r,i,d,y,u){return s(),e("div",null,t)}const m=a(n,[["render",p]]);export{E as __pageData,m as default};
