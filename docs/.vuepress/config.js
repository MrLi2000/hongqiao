module.exports = {
    title: '虹桥的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true, //启用页面滚动效果
        displayAllHeaders: true, // 默认值：false
        nav:[ // 导航栏配置
            {text: '首页', link: '/' },
            {text: '掘金', link: 'https://juejin.cn/user/3693991404250397' },
        ],
        // 侧边栏
        sidebar: {
            '/life/': [
                {
                    title: '生活测试',
                    collapsable: false,
                    children: [
                        { title: '生活测试01', path: '/life/life01' },
                        { title: '生活测试02', path: '/life/life02' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}