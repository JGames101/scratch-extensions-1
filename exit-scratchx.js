new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'exit scratchx', 'exit']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Exit-ScratchX-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.exit = function() {
		var url =  window.location.href;
		var point = url.indexOf('#');
		var before = url.substring(0, point);
		var after = url.substring(point);
		if (after == '#home') {
			window.location = before + '#';
		} else {
			window.location = before + '#home';
		}
	};
	
	ScratchExtensions.register('Exit ScratchX', descriptor, ext);
})();