define(['ServiceRegistry'], function(sr) {
	console.log(sr);
	window.registry = new sr.Registry();
});