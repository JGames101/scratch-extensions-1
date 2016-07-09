new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%s reversed', 'reverse', ''],
			['r', '%s in pig latin', 'pig', 'hello'],
			['r', 'vowels in %s', 'vowels', 'hello world'],
			['r', 'alphanumeric part of %s','alphanumeric', 'taco cat'],
			['b', '%s is a palindrome?','palindrome', 'yay'],
			['r', 'words in %s', 'wordcount', 'hello world']
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Text-Stuff-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.reverse = function(s) {
		for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
		return o;
	} // credit to edd mann
	
	ext.alpha = function(s) {
		var charlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		for (i = 0; i < s.length; i++) {
			if (charlist.indexOf(s.charAt(i)) === -1) {
				return false;
			}
		}
		return true;
	}
	
	ext.pig = function(s) {
		if (s.length < 1) {
			return '';
		} else if (! ext.alpha(s)) {
			return '';
		} else {
			var lower = s.toLowerCase();
			var vowels = ['a', 'e', 'i', 'o', 'u'];
			var threeletters = ['sch', 'scr', 'shr', 'sph', 'spl', 'spr', 'squ', 'str', 'thr'];
			var twoletters = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];
			if (vowels.indexOf(lower.charAt(0)) != -1) {
				return lower + 'yay';
			} else if (threeletters.indexOf(lower.substring(0,3)) != -1) {
				return lower.substring(3) + lower.substring(0,3) + 'ay';
			} else if (twoletters.indexOf(lower.substring(0,2)) != -1) {
				return lower.substring(2) + lower.substring(0,2) + 'ay';
			} else {
				return lower.substring(1) + lower.charAt(0) + 'ay';
			}
		}
	}
	
	ext.vowels = function(s) {
		var vowellist = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
		var vowelcount = 0;
		for (i = 0; i < s.length; i++) {
			if (vowellist.indexOf(s.charAt(i)) != -1) {
				vowelcount++
			}
		}
		return vowelcount;
	}
	
	ext.palindrome = function(s) {
		return (s == ext.reverse(s));
	}
	
	ext.alphanumeric = function(s) {
		var anchars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		var an = [];
		for (i = 0; i < s.length; i++) {
			if (anchars.indexOf(s.charAt(i)) != -1) {
				an.push((s.charAt(i)).toLowerCase());
			}
		}
		return an.join('');
	}
	
	ext.wordcount = function(s) {
		var white = ['	', '', '', ' ', '', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '　'];
		prev = ' ';
		wordcounter = 0;
		for (i = 0; i < s.length; i++) {
			if ((white.indexOf(s.charAt(i)) == -1) && (white.indexOf(prev) != -1)) {
				wordcounter++;
			}
			prev = s.charAt(i);
		}
		return wordcounter;
	}
	
	ScratchExtensions.register('Text Stuff', descriptor, ext);
})();