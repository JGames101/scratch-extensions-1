new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'set maker key to %s', 'setKey'],
			[' ', 'trigger event %s', 'trigger', 'button_pressed'],
			[' ', 'trigger event %s with values %s %s %s', 'triggerValues', 'button_pressed'],
			['r', 'encode URI %s', 'encode']
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/IFTTT'
	};
	
	ext.key = '{key}';
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	ext.setKey = function(s) {
		ext.key = s;
	};
	
	ext.trigger = function(t) {
		if (ext.key = '{key}') {
			alert('Please specify your key using the "set maker key to []" block');
		} else {
			var xhttp = new XMLHttpRequest();
			xhttp.open('GET', 'https://maker.ifttt.com/trigger/' + t + '/with/key/' + ext.key);
			xhttp.send();
		}
	};
	
	ext.triggerValues = function(t, v1, v2, v3) {
		if (ext.key = '{key}') {
			alert('Please specify your key using the "set maker key to []" block');
		} else {
			var xhttp = new XMLHttpRequest();
			xhttp.open('GET', 'https://maker.ifttt.com/trigger/' + t + '/with/key/' + ext.key);
			xhttp.send();
		}
	};
	
	ext.encode = function(asdf) {
		return encodeURI(asdf);
	};
	
	ScratchExtensions.register('IFTTT', descriptor, ext);
})();