
let fs = require('fs')
const AxiosRequest =require("../http/AxiosRequest.js") 
const FileHelper =require("../helper/FileHelper.js") 
const fmt =require("../helper/FormatHelper.js") 
const wiki = require('wikipedia');



const translate = require("google-translate-api");

const config=require("./config.js");
const { log } = require('console');
 
const PATH="./docs/{lang}/news"
const SRCBASE="./src/google"
const CHANNEL="google"

// https://github.com/dopecodez/Wikipedia/blob/master/docs/wiki.md


const argv = require('minimist')(process.argv.slice(2));


function getFileName(channel, lang, year, month, day){
    return `${channel}-${year}${month}${day}.md`
}
function getFileFolder(base, channel, lang, year, month, day){
    return `${base}/${channel}/${year}/${month}`
}
async function transformArticle(article){
    article.titleZh= article.title
    let res=await translate(article.titleZh, { to: 'en' })
    article.titleEn= res?res.text:article.titleZh
    return article
}

async function translateArticle(article){
    article.titleZh= article.title

    var appid = '2015063000000001';
    var key = '12345678';
    var salt = (new Date).getTime();
    var query = 'apple';
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var from = 'en';
    var to = 'zh';
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    await fetch({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        method: 'get', 
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        } 
    }) 

    article.titleEn= res?res.text:article.titleZh

    return article
}







function writeArticlesFile(base, lang, content, year, month, day){
    base=base.replace("{lang}",lang)
    const fileFolder=getFileFolder(base, CHANNEL, lang, year, month, day) 
    const fileName=getFileName(CHANNEL, lang, year, month, day) 
 
    if(!fs.existsSync(fileFolder)) { fs.mkdirSync(fileFolder, { recursive: true }); } 
     
    let path=`${fileFolder}/${fileName}` 
    FileHelper.write(path, content, "utf8", false)  
}

async function writeArticles(articles, year, month, day){
   
    let fileContent=""
    fileContent+=`---
layout: doc
## navbar: false
sidebar: false
footer: true
prev: false
next: false 
hideAdContent: false
title: 最新资讯
---
`
    
fileContent+=`# 最新资讯  \n`; 
fileContent+=`Latest News  (${year}${month}${day})   \n`; 
 
    let article=null 
    for (let index = 0; index < articles.length; index++) { 
        article=articles[index] 
        
        console.log("translate title: ", article.title);
        if(!article.titleEn){
            await transformArticle(article)
        }

        fileContent+=`## ${article.title}   \n`;
        fileContent+=`${article.titleEn}   \n`; 
        fileContent+=`${article.link}   \n`; 
        fileContent+=`\n`;  
    }

    writeArticlesFile(PATH, "zh", fileContent, year, month, day) 
}


 
async function main(){
 
    // 最新资讯  
    let newsDate=new Date() 
    let news={year:fmt.fyear(newsDate), month: fmt.fmonth(newsDate), day:fmt.fday(newsDate)}
    let content=FileHelper.read(`${SRCBASE}/news/news-${news.year}${news.month}${news.day}.json`)
    let contentEn=FileHelper.read(`${SRCBASE}/news/news-${news.year}${news.month}${news.day}-en.json`)
    let articles=JSON.parse(content)
    let articlesEn=JSON.parse(contentEn)
    for (let ci = 0; ci < articlesEn.length; ci++) {
        const articleEn = articlesEn[ci];
        const article = articles[ci];
        article.titleEn=articleEn.title
    }

    console.log(articles);
    writeArticles(articles, news.year, news.month, news.day )

}


main()
     






