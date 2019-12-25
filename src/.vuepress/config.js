module.exports = {
	title: 'Ctum 的博客',
	dest: './public',
	// head 额外被注入到 <head>标签,
	// extend: '@vuepress/theme-default',
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'About', link: '/about/' },
			{ text: 'RSS Feed', link: '/rss.xml' }
    ],
    repo: 'https://github.com/Ctum/vuepress-blog-boilerplate',
    repoLabel: 'Github',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '最后更新时间'
  },
  plugins: ['@vuepress/back-to-top']
}