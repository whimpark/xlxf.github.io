<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

 
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
 

const { Layout } = DefaultTheme


</script>

<template>
  <Layout>
    <template #doc-top>
        <div v-if="!frontmatter.hideAdContent">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6579111049316949" crossorigin="anonymous"></script>
            <!-- 模向广告 -->
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-6579111049316949"
                data-ad-slot="8705179855"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <!-- <script> if (typeof window !== 'undefined') { (adsbygoogle = window.adsbygoogle || []).push({});  } </script> -->
            <script>  (adsbygoogle = window.adsbygoogle || []).push({});  </script>
        </div>
    </template>
  </Layout>
</template>