new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', '%m.bool', 'valueFunction', 'F'],
			['b', '%m.unary when p = %b', 'unaryFunction', 'F'],
			['b', '%m.binary when p = %b and q = %b', 'binaryFunction', 'F']
		],
		menus: {
			bool: ['T', 'F'],
			unary: ['F', 'p', '¬p', 'T'],
			binary: ['F', 'NOR', 'Xq', '¬p', '↛', '¬q', 'XOR', 'NAND', 'AND', 'XNOR', 'q', 'if/then', 'p', 'then/if', 'OR', 'T']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Logic'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.valueFunction = function(oper) {
		switch(oper) {
			case 'F':
				return false;
				break;
			case 'T':
				return true;
				break;
		};
	};
	
	ext.unaryFunction = function(oper, p) {
		switch(oper) {
			case 'F':
				var useless = p;
				return false;
				break;
			case 'p':
				return p;
				break;
			case '¬p':
				return !p;
				break;
			case 'T':
				var useless = p;
				return true;
				break;
		};
	};
	
	ext.binaryFunction = function(oper, p, q) {
		switch(oper) {
			case 'F':
				var useless = p;
				var useless2 = q;
				return false;
				break;
			case 'NOR':
				return !(p || q);
				break;
			case 'Xq':
				if (q && !p) {
					return true;
				} else {
					return false;
				};
				break;
			case '¬p':
				var useless = q;
				return !p;
				break;
			case '↛':
				if (p && !q) {
					return true;
				} else {
					return false;
				};
				break;
			case '¬q':
				var useless = p;
				return !q;
				break;
			case 'XOR':
				return (p || q) && !(p && q);
				break;
			case 'NAND':
				return !(p && q);
				break;
			case 'AND':
				return (p && q);
				break;
			case 'XNOR':
				return !((p || q) && !(p && q));
				break;
			case 'q':
				var useless = p;
				return q;
				break;
			case 'if/then':
				if (p && !q) {
					return false;
				} else {
					return true;
				};
				break;
			case 'p':
				var useless = q;
				return p;
			case 'then/if':
				if (q && !p) {
					return false;
				} else {
					return true;
				};
				break;
			case 'OR':
				return (p || q);
				break;
			case 'T':
				var useless = p;
				var useless2 = q;
				return true;
				break;
		};
	};
	
	ScratchExtensions.register('Logic', descriptor, ext);
})();