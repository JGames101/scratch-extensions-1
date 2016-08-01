new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize extension', 'clear'],
			[' ', 'initialize object %s', 'init'],
			[' ', 'set %s of object %s to %s', 'set'],
			[' ', 'delete property %s of object %s', 'del'],
			['r', '%s of object %s', 'get', '']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Objects'
	};
	
	ext.objobj = {};
	
	ext._shutdown = function() {
		ext.objobj = {};
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.init = function(name) {
		ext.objobj[name] = {};
	};
	
	ext.set = function(key, name, value) {
		if (ext.objobj[name] !== undefined) {
			ext.objobj[name][key] = value;
		}
	};
	
	ext.del = function(key, name, value) {
		if (ext.objobj[name] !== undefined) {
			if (ext.objobj[name][key] !== undefined) {
				delete ext.objobj[name][key];
			}
		}
	};
	
	ext.get = function(key, name, value) {
		if (ext.objobj[name] !== undefined) {
			if (ext.objobj[name][key] !== undefined) {
				return ext.objobj[name][key];
			} else {
				return '';
			}
		} else {
			return '';
		}
	};
	
	ext.clear = function() {
		ext.objobj = {};
	};
	
	ScratchExtensions.register('Objects', descriptor, ext);
})();