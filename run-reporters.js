new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'run %s', 'do']
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Run-Reporters'
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	ext.do = function(string) {
		useless = string;
	};
	
	ScratchExtensions.register('Run Reporters', descriptor, ext);
})();