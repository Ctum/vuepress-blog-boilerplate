const currentDate = new Date();
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
		images: [ 'https://cdn.pixabay.com/photo/2019/12/03/07/34/gift-4669449__340.jpg',
		'https://cdn.pixabay.com/photo/2019/12/05/11/10/snowman-4674856__340.jpg',
		// 'https://cdn.pixabay.com/photo/2019/02/04/07/36/new-year-3974099__340.jpg',
		// 'https://cdn.pixabay.com/photo/2014/12/09/17/34/girl-562157__340.jpg',
		'https://cdn.pixabay.com/photo/2019/12/07/18/14/branch-4679835__340.jpg',
		// 'https://cdn.pixabay.com/photo/2019/11/13/12/35/anise-4623554__340.png',
		'https://cdn.pixabay.com/photo/2019/12/16/07/41/winter-4698763__340.jpg',
		'https://cdn.pixabay.com/photo/2019/12/19/03/24/branch-4705310__340.jpg',
		'https://cdn.pixabay.com/photo/2019/12/11/19/38/christmas-4689129__340.jpg',
		'https://cdn.pixabay.com/photo/2019/12/19/19/46/bird-4706963__340.jpg' ],
    nav: [
      { text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'About', link: '/about/' },
			// { text: 'RSS Feed', link: '/rss.xml' }
    ],
    repo: 'https://github.com/Ctum/vuepress-blog-boilerplate',
    repoLabel: 'Github',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
		// 默认为 "Edit this page"
		docsDir: 'src',
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '最后更新时间'
  },
	plugins: ['@vuepress/back-to-top',
		[
			'vuepress-plugin-rss',
			{
				base_url: '/', // required
				site_url: 'https://ctum.github.io', // required
				copyright: '2019-' + currentDate.getFullYear() + 'Ctum', // optional
				// filter some post
				filter: (frontmatter) => frontmatter.post,
				// How much articles
				count: 20
			}
		]
	]
}