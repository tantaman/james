define(function() {
	'use strict';

	var lookupHandlers = {
		css: function(str) {
			var parts = partitionSelector(str);
			var el = document.querySelector(parts[0]);

			if (parts.length > 0)
				return el[parts[1]];
			return el;
		},

		registry: function(json) {
			var lookup = JSON.parse(json);
			return window.registry.get(lookup);
		}
	};

	function partition(str) {
		var split = str.indexOf(':');
		if (split == -1 || split == str.length)
			throw new Error('Incorreclty formatted lookup string.  No protocol specified');

		return [str.substring(0, split), str.substring(split+1)];
	}

	function partitionSelector(str) {
		var split = str.indexOf('!');
		if (split == -1)
			return [str];

		return [str.substring(0, split), str.substring(split+1)];
	}

	return {
		lookup: function(str) {
			var parts = partition(str);
			return lookupHandlers[parts[0]](parts[1]);
		}
	};
});