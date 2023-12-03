


## 在Chrome中执行脚本
```js

// https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNREpxYW5RU0JYcG9MVU5PR2dKRFRpZ0FQAQ?hl=zh-CN&gl=CN&ceid=CN%3Azh-Hans

let links=document.getElementsByTagName("h4")
let contents=[]

for(let ki=0;ki<links.length;ki++){
    let link=links[ki]
    let plink=link.parentNode
    contents.push({
        "title":link.innerText,
        "link":plink.href,
    })
}

console.log(JSON.stringify(contents)) 

```

## 保存为content.json










