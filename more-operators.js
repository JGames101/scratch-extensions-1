new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['h', 'when %b is %m.bools', 'when', '', 'true'],
			['r', 'if %b then %s else %s', 'ifrep', ''],
			['-'],
			['r', 'letters %n to %n of %s', 'sub', 10],
			['r', 'letters %n to end of %s', 'sub2', 10],
			['b', '%s contains %s', 'contain', ''],
			['-'],
			['b', '%b xor %b', 'xor', ''],
			['b', 'case sensitive string %s = %s', 'streq', ''],
			['-'],
			['r', '%s reversed', 'reverse', ''],
			['r', '%s lower case', 'lower', ''],
			['r', '%s upper case', 'upper', ''],
			['r', '%s scrambled', 'scramble', ''],
			['r', 'position of %s in %s', 'index', ''],
			['-'],
			['b', 'is %s %m.datas?', 'isdata', '', 'a number'],
			['b', '%s contains %m.amount %m.sets', 'charsets', '', 'no', 'lowercase letters'],
			['-'],
			['r', 'unicode of first letter of %s', 'tocode', ''],
			['r', 'letter with unicode %n', 'fromcode', 10]
		],
		menus: {
			bools: ['true', 'false'],
			datas: ['a number', 'a boolean', 'empty'],
			amount: ['no', 'some', 'all'],
			sets: ['lowercase letters', 'uppercase letters'],
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/More-Operators-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.when = function(bool, val) {
		if (val === 'true') {
			var boolval = true;
		} else {
			var boolval = false;
		};
		if (bool === boolval) {
			return true;
		};
	};
	
	ext.ifrep = function(bool, val1, val2) {
		if (bool === true) {
			return val1;
		} else {
			return val2;
		};
	};
	
	ext.sub = function(start, end, str) {
		var subs = start - 1
		return str.substring(subs, end);
	};
	
	ext.sub2 = function(start, str) {
		var subs = start - 1
		return str.substring(subs);
	};
	
	ext.contain = function(big, small) {
		if (small === '') {
			return false;
		} else {
			return (big.indexOf(small) > -1);
		};
	};
	
	ext.xor = function(p, q) {
		return (p || q) && !(p && q);
	};
	
	ext.streq = function(str, strr) {
		return (str === strr);
	};
	
	ext.reverse = function(s) {
		for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
		return o;
	} // credit to edd mann
	
	ext.lower = function(s) {
		return s.toLowerCase();
	};
	
	ext.upper = function(s) {
		return s.toUpperCase();
	};
	
	ext.scramble = function(str) { 
  var scrambled = '', 
    src = str.split(''),
    randomNum; 
  while (src.length > 1) { 
    randomNum = Math.floor(Math.random() * src.length); 
    scrambled += src[randomNum];
    src.splice(randomNum, 1); 
  } 
  scrambled += src[0]; 
  return scrambled; 
	} // credit to Fotiman
	
	ext.index = function(term, str) {
		return ((str.indexOf(term)) + 1);
	};
	
	ext.isdata = function(instring, type) {
		var str = String.trim(instring.toString());
		switch(type) {
			case 'a number':
				if (str === '') {
					return false;
				} else {
					return !(isNaN(str));
				}
				break;
			case 'a boolean':
				return (str == 'true') || (str == 'false');
				break;
			case 'empty':
				return (str == '');
				break;
		}
	};
	
	ext.tocode = function(str) {
		return str.charCodeAt(0);
	};
	
	ext.fromcode = function(code) {
		return String.fromCharCode(code);
	};
	
	ext.charsets = function(str, amount, set) {
		switch(set) {
			case 'lowercase letters':
				var charlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
				break;
			case 'uppercase letters':
				var charlist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
				break;
		}
		switch(amount) {
			case 'no':
				for (i = 0; i < str.length; i++) {
					if (charlist.indexOf(str.charAt(i)) > -1) {
						return false;
					}
				}
				return true;
			case 'some':
				for (i = 0; i < str.length; i++) {
					if (charlist.indexOf(str.charAt(i)) > -1) {
						return true;
					}
				}
				return false;
			case 'all':
				for (i = 0; i < str.length; i++) {
					if (charlist.indexOf(str.charAt(i)) === -1) {
						return false;
					}
				}
				return true;
		}
	};
	
	ScratchExtensions.register('More Operators', descriptor, ext);
})();