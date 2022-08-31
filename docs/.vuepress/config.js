module.exports = {
    base: '/hongqiao/',
    title: '小狗先森',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/dog.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/dog.png',
        smoothScroll: true, //启用页面滚动效果
        displayAllHeaders: true, // 默认值：false
        nav:[ // 导航栏配置
            {text: '首页', link: '/' },
            {text: '指南', link: '/guide/' },
            {text: '掘金', link: 'https://juejin.cn/user/3693991404250397' },
            {text: 'Markdown', link: 'https://www.vuepress.cn/guide/markdown.html' },
            {text: '部署', link: 'https://www.vuepress.cn/guide/deploy.html' },
        ],
        // 侧边栏
        sidebar: {
            '/recipes/': [
                {
                    title: '水果',
                    // collapsable: false,
                    children: [
                        { title: '西瓜', path: '/recipes/fruits/xigua'},
                        { title: '葡萄', path: '/recipes/fruits/putao'},
                        { title: '草莓', path: '/recipes/fruits/caomei'},
                    ]
                },
                {
                    title: '素',
                    // collapsable: false,
                    children: [
                        { title: '土豆', path: '/recipes/vegetables/tudou'},
                        { title: '番茄', path: '/recipes/vegetables/fanqie'},
                    ]
                },
            ],
            '/': [''],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github-v4', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'MrLi2000', //github账户名
            repo: 'hongqiao', //github一个项目的名称
            clientId: '0c1a015142f0a9696811',//注册的Client ID
            clientSecret: '913080177981461bae4c4994dfc39dd8b09efedb',//注册的Client Secret
            autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        },
    },
}
