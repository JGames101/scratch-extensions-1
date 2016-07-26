new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', 'get %s , %m.cors , %m.cachebuster', 'get', 'https://api.scratch.mit.edu/users/mres', 'no cors proxy', 'add random query string'],
			['r', 'json %s [ %s ]', 'thingy', '', '"id"']
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
	
	ext.get = function(inurl, cors, cb, callback) {
		var url = inurl;
		if (cors == 'use cors proxy') {
			url = 'https://crossorigin.me/' + url;
		}
		if (cb == 'add random query string') {
			if (inurl.indexOf('?') != -1) {
				url += '&randomstuff=' + Math.floor(Math.random() * 10000) + Number(new Date()).toString();
			} else {
				url += '?randomstuff=' + Math.floor(Math.random() * 10000) + Number(new Date()).toString();
			}
		}
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var a = JSON.parse(r.responseText);
				var b = JSON.stringify(a);
				callback(b);
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', url, true);
		r.send();
	} // Credit to Zatnik
	
	ext.thingy = function(s, br) {
		var obj = JSON.parse(s);
		var p = eval('obj[' + br + ']');
		return JSON.stringify(p);
	}
	
	ScratchExtensions.register('Most Purpose API Extension', descriptor, ext);
})();
