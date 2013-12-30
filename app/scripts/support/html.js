define(function() {
	var tags = ['link', 'a', 'div', 'p', 'h1', 'h2', 'h3',
				'h4', 'span', 'ul', 'ol', 'li'];

	var api = {
		create: {},
		head: (function() {
			var cached = null;
			return function() {
				return cached || (cached = document.getElementsByTagName('head')[0]);
			}
		})()
	};

	function createCreateFn(tag) {
		return function(attrs) {
			var e = document.createElement(tag);
			Object.keys(attrs).forEach(function(key) {
				e[key] = attrs[key];
			});

			return e;
		}
	}

	tags.forEach(function(tag) {
		api.create[tag] = createCreateFn(tag);
	});

	return api;
});