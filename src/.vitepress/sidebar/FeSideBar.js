
import utils from "../utils.js"


export function getFeSideBar() {
    return [
        {
            text: '前端基础', items: [
                utils.build('概览', '/fe/'),
                utils.build('术语', '/fe/term'),
            ]
        },
        {
            text: 'NodeJS', items: [
                utils.build('语法', '/fe/nodejs/grammar'),
                utils.build('指南', '/fe/nodejs/guide'),
            ]
        },
        {
            text: 'VueJS', items: [
                utils.build('语法', '/fe/vuejs/grammar'),
                utils.build('指南', '/fe/vuejs/guide'),
            ]
        },
        {
            text: 'Webpack', items: [
                utils.build('语法', '/fe/webpack/grammar'),
                utils.build('指南', '/fe/webpack/guide'),
            ]
        },

    ]
}