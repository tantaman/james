define(['html'], function(html) {
	return {
		import: function(componentName) {
			html.head()
				.appendChild(
					html.create.link({
						rel: 'import',
						href: require.toUrl(componentName) + '.html'
					}));
		}
	}
});