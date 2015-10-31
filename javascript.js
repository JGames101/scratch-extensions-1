new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'run JavaScript %s', 'run'],
			['r', 'evaluate JavaScript %s', 'evaluate']
		],
		url : "https://github.com/savaka2/scratch-extensions/wiki/JavaScript-extension"
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.run = function(s) {
		eval(s);
	};
	
	ext.evaluate = function(s) {
		return eval(s);
	};
	
	ScratchExtensions.register('JavaScript', descriptor, ext);
})();
