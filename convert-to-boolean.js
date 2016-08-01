new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', '%s as boolean', 'asboolean', 'false'],
			['b', 'false', 'bfalse', ''],
			['b', 'true', 'btrue', '']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Convert-to-Boolean'
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.asboolean = function(s) {
		if (s === true) {
			return true;
		} else if (typeof s === 'string') {
			if (s.toLowerCase() === 'true') {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	
	ext.bfalse = function() {
		return false;
	};
	
	ext.btrue = function() {
		return true;
	};
	
	ScratchExtensions.register('Convert to Boolean', descriptor, ext);
})();