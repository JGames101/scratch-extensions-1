new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'comment: %s', 'comment'],
			[' ', 'print %s to web console', 'debug']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Debugging-extension'
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.comment = function(s) {
		
	};
	
	ext.debug = function(s) {
		console.log(s);
	};
	
	ScratchExtensions.register('Debugging', descriptor, ext);
})();