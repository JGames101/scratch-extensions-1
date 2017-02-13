new (function() {
	var ext = this;	
	var descriptor = {
		blocks: [
			['h', 'when either stage button clicked', 'stopclicked']
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Stop-Clicked'
	};
	
	var stopped = false;
	
	ext._shutdown = function() {
		
	};
	
	ext._stop = function() {
		stopped = true;
	};
	
	ext.stopclicked = function() {
		if (stopped) {
			stopped = false;
			return true;
		}
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ScratchExtensions.register('Stop Clicked', descriptor, ext);
})();