new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', '%m.projectstuff of project with id %n', 'projectid', 'Title', 10000000],
			['R', '%m.profilestuff of user %s', 'userid', 'About'],
			['-'],
			['r', '%m.timestuff of ISO 8601 share date/time %s', 'isodate', 'date', '2012-09-13T07:32:57']
		],
		menus: {
			projectstuff: ['Creator', 'About creator', 'Country of creator', 'What creator is working on', 'Share date', 'Notes and Credits', 'Favorite count', 'Love count', 'URL of thumbnail', 'Title', 'View count'],
			profilestuff: ['About', 'Country', 'What I\'m working on'],
			timestuff: ['year', 'month', 'date', 'hour', 'minute', 'second']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Scratch-API'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userid = function(stuff, user, callback) {
		var jsonurl = 'https://scratch.mit.edu/api/v1/user/' + user + '/?format=json&randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				var profile = obj.userprofile;
				switch(stuff) {
					case 'About':
						callback(profile.bio);
						break;
					case 'Country':
						callback(profile.country);
						break;
					case 'What I\'m working on':
						callback(profile.status);
				}
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	} // Credit to Zatnik
	
	ext.projectid = function(stuff, project, callback) {
		var jsonurl = 'https://scratch.mit.edu/api/v1/project/' + project + '/?format=json&randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				var person = obj.creator;
				var profile = person.userprofile;
				switch(stuff) {
					case 'Creator':
						callback(person.username);
						break;
					case 'About creator':
						callback(profile.bio);
						break;
					case 'Country of creator':
						callback(profile.country);
						break;
					case 'What creator is working on':
						callback(profile.status);
						break;
					case 'Share date':
						callback(obj.datetime_shared);
						break;
					case 'Notes and Credits':
						callback(obj.description);
						break;
					case 'Favorite count':
						callback(obj.favorite_count);
						break;
					case 'Love count':
						callback(obj.love_count);
						break;
					case 'URL of thumbnail':
						callback(obj.thumbnail);
						break;
					case 'Title':
						callback(obj.title);
						break;
					case 'View count':
						callback(obj.view_count);
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
	
	ScratchExtensions.register('Scratch API', descriptor, ext);
})();