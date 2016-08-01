new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', 'current system %m.apistatus', 'currentstatus', 'status'],
			['R', '%m.apilastmessage of last message', 'lastmessage', 'status'],
			['-'],
			['r', '%m.timestuff of ISO 8601 timestamp %s', 'isodate', 'date', '2012-12-07T18:11:55Z']
		],
		menus: {
			apistatus: ['status', 'status timestamp'],
			apilastmessage: ['status', 'text', 'timestamp'],
			timestuff: ['year', 'month', 'date', 'hour', 'minute', 'second']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/GitHub-Status-API'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.currentstatus = function(stuff, callback) {
		var jsonurl = 'https://crossorigin.me/https://status.github.com/api/status.json?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				switch(stuff) {
					case 'status':
						callback(obj.status);
						break;
					case 'status timestamp':
						callback(obj.last_updated);
				}
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	} // Credit to Zatnik
	
	ext.lastmessage = function(stuff, callback) {
		var jsonurl = 'https://crossorigin.me/https://status.github.com/api/last-message.json?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				switch(stuff) {
					case 'status':
						callback(obj.status);
						break;
					case 'text':
						callback(obj.body);
						break;
					case 'timestamp':
						callback(obj.created_on);
				}
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	} // Credit to Zatnik
	
	ext.isodate = function(stuff, datettime) {
		switch(stuff) {
			case 'year':
				return Number(datettime.substring(0,4));
				break;
			case 'month':
				return Number(datettime.substring(5,7));
				break;
			case 'date':
				return Number(datettime.substring(8,10));
				break;
			case 'hour':
				return Number(datettime.substring(11,13));
				break;
			case 'minute':
				return Number(datettime.substring(14,16));
				break;
			case 'second':
				return Number(datettime.substring(17,19));
		}
	}
	
	ScratchExtensions.register('GitHub Status API', descriptor, ext);
})();