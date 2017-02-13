new (function() {
	var ext = this;	
	var descriptor = {
		blocks: [
			['h', 'when stop sign clicked', 'stop-clicked']
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/When-Stop-Clicked'
	};
	
	var stopped = false;
	
	ext._shutdown = function() {
		
	};
	
	ext._stop = function() {
		stopped = true;
	};
	
	ext.stop-clicked = function() {
		if (stopped) {
			stopped = false;
			return true;
		}
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ScratchExtensions.register('When Stop Clicked', descriptor, ext);
})();