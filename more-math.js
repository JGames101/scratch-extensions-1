new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', '%n ≤ %n', 'loe', 10],
			['b', '%n ≠ %n', 'net', 10],
			['b', '%n ≥ %n', 'goe', 10],
			['r', '%n ^ %n', 'exponent', 10],
			['r', '%n √ %n', 'nthroot', 10],
			['r', 'π', 'pi', ''],
			['r', 'e', 'e', ''],
			['r', 'log %n of %n', 'log', 10],
			['r', '%n ° to radians', 'degrad', 10],
			['r', '%n r to degrees', 'raddeg', 10],
			['r', '%m.functions of %n', 'advanced', 'csc'],
			['b', 'is %n prime?', 'prime', 10],
			['r', '%n ° %n \' %n "', 'dms', 10],
			['r', '%n%', 'percent', 10],
			['r', 'round %n %m.roundmode %n', 'roundplaces', 10, 'to the nearest'],
			['r', 'greatest common factor of %n and %n', 'hcf', 10],
			['r', 'least common multiple of %n and %n', 'lcm', 10],
			['r', 'sum from %n to %n', 'sigmasum', 10],
			['r', 'product from %n to %n', 'piproduct', 10],
			['r', '∞ infinity', 'inf', ''],
			['r', 'φ phi', 'phi', ''],
			['r', '%m.parts part of %n', 'ifpart', 'integer'],
			['r', 'sign of %n', 'sign', 10],
			['r', 'use quadratic formula to find root %m.iden of y= %n x^2+ %n x+ %n', 'quadform', '1'],
			['r', 'random number', 'randnum', ''],
			['-'],
			['r', 'set %s', 'calculate', ''],
			['r', 'reset', 'reset', ''],
			['r', 'answer', 'ans', '']
		],
		menus: {
			functions: ['csc', 'sec', 'cot', 'acsc', 'asec', 'acot'],
			roundmode: ['to the nearest', 'to this many places:'],
			parts: ['integer', 'fractional'],
			iden: ['1', '2']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/More-Math'
	};
	
	ext.store = 0;
	
	ext._shutdown = function() {
		store = 0;
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.loe = function(num1, num2) {
		return num1 <= num2;
	};
	
	ext.net = function(num1, num2) {
		return num1 != num2;
	};
	
	ext.goe = function(num1, num2) {
		return num1 >= num2;
	};
	
	ext.exponent = function(num1, num2) {
		return Math.pow(num1, num2);
	};
	
	ext.nthroot = function(n, x) {
		return Math.pow(x, (1 / n));
	};
	
	ext.pi = function() {
		return Math.PI;
	};
	
	ext.e = function() {
		return Math.E;
	};
	
	ext.log = function(base, num) {
		return Math.log(num) / Math.log(base);
	};
	
	ext.degrad = function(degs) {
		return (degs * Math.PI) / 180;
	};
	
	ext.raddeg = function(rads) {
		return (rads * 180) / Math.PI;
	};
	
	ext.advanced = function(func, num) {
		switch(func) {
			case 'csc':
				return 1 / Math.sin((num * Math.PI) / 180);
				break;
			case 'sec':
				return 1 / Math.cos((num * Math.PI) / 180);
				break;
			case 'cot':
				return 1 / Math.tan((num * Math.PI) / 180);
				break;
			case 'asin':
				return (Math.asin(num) * 180) / Math.PI;
				break;
			case 'acos':
				return (Math.acos(num) * 180) / Math.PI;
				break;
			case 'atan':
				return (Math.atan(num) * 180) / Math.PI;
				break;
			case 'acsc':
				return (Math.asin(1 / num) * 180) / Math.PI;
				break;
			case 'asec':
				return (Math.acos(1 / num) * 180) / Math.PI;
				break;
			case 'acos':
				return (Math.atan(1 / num) * 180) / Math.PI;
				break;
		};
	};
	
	ext.prime = function(n) {
		if (n < 2) {
			return false;
		} else if (!(Math.round(n) === n)) {
			return false;
		} else if (n === 2) {
			return true;
		} else {
			var x = 2;
			while (x != n) {
				if (n % x === 0) {
					return false;
				};
				x++;
			};
			return true;
		};
	};
	
	ext.calculate = function(num) {
		store = num;
		return num;
	};
	
	ext.reset = function() {
		store = 0;
		return 0;
	};
	
	ext.ans = function() {
		return store;
	};
	
	ext.dms = function(d, m, s) {
		return d + (m / 60) + (s / 3600);
	};
	
	ext.percent = function(num) {
		return num / 100;
	};
	
	ext.roundplaces = function(num, mode, rrr) {
		switch(mode) {
			case 'to the nearest':
				return Math.round(num / rrr) * rrr;
				break;
			case 'to this many places:':
				return Math.round(num * Math.pow(10, rrr)) / Math.pow(10, rrr);
				break;
		}
	};
	
	ext.hcf = function(text1,text2){
  var gcd=1;
  if (text1>text2) {text1=text1+text2; text2=text1-text2; text1=text1-text2;}
  if ((text2==(Math.round(text2/text1))*text1)) {gcd=text1}else {
   for (var i = Math.round(text1/2) ; i > 1; i=i-1) {
    if ((text1==(Math.round(text1/i))*i))
     if ((text2==(Math.round(text2/i))*i)) {gcd=i; i=-1;}
   }
  }
  return gcd;
	}; // credit to Seamus Yim
	
	ext.lcm = function(t1,t2){
  var cm=1;
  var f = ext.hcf(t1,t2);
  cm=t1*t2/f;
  return cm;
	}; // credit to Seamus Yim
	
	ext.inf = function() {
		return Infinity;
	};
	
	ext.phi = function() {
		return (1 + Math.sqrt(5) / 2);
	};
	
	ext.sigmasum = function(start, end) {
		var addit = start;
		var returner = 0;
		while (addit <= end) {
			returner = returner + addit;
			addit++;
		}
		return returner;
	};
	
	ext.piproduct = function(start, end) {
		var addit = start;
		var returner = 1;
		while (addit <= end) {
			returner = returner * addit;
			addit++;
		}
		return returner;
	};
	
	ext.ifpart = function(mode, num) {
		switch(mode) {
			case 'integer':
				if (num < 0) {
					return Math.ceil(num);
				} else {
					return Math.floor(num);
				}
				break;
			case 'fractional':
				if (num < 0) {
					return num - Math.ceil(num);
				} else {
					return num - Math.floor(num);
				}
				break;
		}
	};
	
	ext.sign = function(num) {
		if (num === 0) {
			return 0;
		} else if (num < 0) {
			return -1;
		} else if (num > 0) {
			return 1;
		}
	};
	
	ext.quadform = function(root, a, b, c) {
		switch(root) {
			case '1':
				return ((-1 * b) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
				break;
			case '2':
				return ((-1 * b) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
				break;
		}
	};
	
	ext.randnum = function() {
		return Math.random();
	}
	
	ScratchExtensions.register('More Math', descriptor, ext);
})();