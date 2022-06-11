import utils from "../utils.js"


export function getBeJavaSideBar() {
  return [
    {
      text: '后端基础',
      items: [
        utils.build('概览', '/be/'),
        utils.build('术语', '/be/term'),
      ]
    },

    {
      text: 'Java', items: [
        utils.build('语法', '/be/java/grammar'),
        utils.build('指南', '/be/java/guide'),
      ]
    }, 

  ]
}



export function getBeSpringSideBar() {
  return [
    {
      text: '后端基础',
      items: [
        utils.build('概览', '/be/'),
        utils.build('术语', '/be/term'),
      ]
    },
    {
      text: 'Spring', items: [
        utils.build('语法', '/be/spring/grammar'),
        utils.build('指南', '/be/spring/guide'),
      ]
    },

  ]
}




export function getBeBusinessSideBar() {
  return [
    {
      text: 'Kafka',
      items: [
        utils.build('Kafka事务消息', '/be/business/kafka-transation-message'),
        utils.build('Kafka消费配置', '/be/business/kafka-config.md'),
      ]
    },
  ]
}