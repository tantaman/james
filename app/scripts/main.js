require.config({
	baseUrl: 'scripts',
	paths: {
		// Polymer: '../bower_components/polymer/polymer',
		// xtagsPlatform: '../bower_components/platform/platform',
		html: 'support/html',
		'polymer-utils': 'support/polymer-utils',
		'cm-editor': 'components/cm-editor/cm-editor',
		'text-preview': 'components/text-preview/text-preview'
	}

	// shim: {
	// 	Polymer: {
	// 		deps: ['xtagsPlatform'],
	// 		exports: 'Polymer'
	// 	}
	// }
});

window.addEventListener('HTMLImportsLoaded', function() {
  		// all imports loaded
  		console.log('IMPORTS LOADED');
  		console.log(arguments);
	});

require(['./app'], function(app) {
	console.log('Included app');
});