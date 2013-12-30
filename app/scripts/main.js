require.config({
	baseUrl: 'scripts',
	paths: {
		Polymer: '../bower_components/polymer/polymer',
		xtagsPlatform: '../bower_components/platform/platform',
		html: 'support/html',
		'polymer-utils': 'support/polymer-utils',
		'cm-editor': 'components/cm-editor/cm-editor',
		'text-preview': 'components/text-preview/text-preview'
	},

	shim: {
		Polymer: {
			deps: ['xtagsPlatform'],
			exports: 'Polymer'
		}
	}
});

require(['./app', 'Polymer'], function(app, Polymer) {
	console.log('Included app');
});