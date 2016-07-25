new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', 'get %s , %m.cors , %m.cachebuster', 'get', 'https://api.scratch.mit.edu/users/mres', 'no cors proxy', 'add random query string']
		],
		menus: {
			cors: ['no cors proxy', 'use cors proxy'],
			cachebuster: ['no cache buster', 'add random query string']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Most-Purpose-API-Extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userid = function(inurl, cors, cb, callback) {
		var url = inurl;
		if (cors == 'use cors proxy') {
			url = 'https://crossorigin.me/' + url;
		}
		if (cb == 'add random query string') {
			if (inurl.indexOf('?') != -1) {
				url += '&' + Math.floor(Math.random() * 10000) + Number(new Date()).toString();
			} else {
				url += '?' + Math.floor(Math.random() * 10000) + Number(new Date()).toString();
			}
		}
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				callback(r.responseText);
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', url, true);
		r.send();
	} // Credit to Zatnik
	
	ScratchExtensions.register('Most Purpose API Extension', descriptor, ext);
})();