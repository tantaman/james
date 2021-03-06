require.config({
	baseUrl: 'scripts',
	paths: {
		// Polymer: '../bower_components/polymer/polymer',
		// xtagsPlatform: '../bower_components/platform/platform',
		html: 'support/html',
		'polymer-utils': 'support/polymer-utils',
		'cm-editor': '../components/cm-editor/cm-editor',
		'text-preview': '../components/text-preview/text-preview',
		lodash: '../bower_components/lodash/dist/lodash'
	},

	packages: [
		{
			name: 'ServiceRegistry',
			location: '../bower_components/ServiceRegistry.js/src',
		}
	]

	// shim: {
	// 	Polymer: {
	// 		deps: ['xtagsPlatform'],
	// 		exports: 'Polymer'
	// 	}
	// }
});

require(['./app'], function(app) {
	console.log('Included app');
});