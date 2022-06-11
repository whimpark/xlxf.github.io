import utils from "../utils.js"


export function getArchSideBar() {
  return [
    {
      text: '架构基础',
      items: [
        utils.build('概览', '/arch/'),
        utils.build('术语', '/arch/term'), 
      ]
    },

    {
      text: '构架理论', items: [
        utils.build('语法', '/arch/theory/grammar'),
        utils.build('指南', '/arch/theory/guide'),  
      ]
    },
    {
      text: '构架实践', link: '/arch/pratice/index',
      items: [
        utils.build('语法', '/arch/pratice/grammar'),
        utils.build('指南', '/arch/pratice/guide'),  
      ]
    },
  ]
}