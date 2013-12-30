// We can solve this via na imperitive registration...
// So we'd need the polymer elem loadable via ajax if take that road...
// Then we can compile them into the page during the build step...
define(['polymer-utils'], function(polymerUtils) {
	// polymerUtils.import('cm-editor');
	Polymer('cm-editor', {
		ready: function() {
			// construction
			console.log('Ready');
		},

		stateChanged: function() {
			// Lookup state
			console.log('State: ' + this.state);
		},

		languageChanged: function() {
			// Configure the editor with the correct lang
			console.log('Language: ' + this.language);
		}
	});
});