<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

 
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
 

const { Layout } = DefaultTheme

// let  showAdContent = frontmatter.showAdContent
// showAdContent =  (typeof showAdContent !== 'undefined') ? showAdContent: true
// console.log("showAdContent", showAdContent);
// console.log("frontmatter.showAdContent", frontmatter.showAdContent);
console.log("frontmatter", frontmatter);


</script>

<template>
  <Layout>
    <template #doc-top>
        <div v-if="!frontmatter.hideAdContent">
            <component :is="'script'">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6579111049316949"
                        crossorigin="anonymous"></script>
            </component>
            <!-- 模向广告 -->
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-6579111049316949"
                data-ad-slot="8705179855"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <component :is="'script'">
                    if (typeof window !== 'undefined') { (adsbygoogle = window.adsbygoogle || []).push({});  }
            </component>
        </div>
    </template>
  </Layout>
</template>