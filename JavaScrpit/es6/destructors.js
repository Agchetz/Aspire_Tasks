//ARRAY

//ES6
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

//ES5
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;

//Object matching, 

//Shorthand notation

//ES6
var { aa, bb, cc } = getASTNode()

//ES5
var tmp = getASTNode();
var aa  = tmp.aa;
var bb = tmp.bb;
var cc = tmp.cc;

//Deep matching

//ES6
var { aa : xx, bb : {dd : yy}, cc : zz } = getASTNode()

//ES5
var tmp = getASTNode();
var xx  = tmp.aa;
var yy  = tmp.bb.dd;
var zz  = tmp.cc;

//Object and array matcing [default value]

//ES6
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list

//ES5
var obj = { a: 1 };
var list = [ 1 ];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];

// Fall softing destructing

//ES6
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
a === 7
b === 42
c === 3
d === undefined

//ES5
var list = [ 7, 42 ];
var a = typeof list[0] !== "undefined" ? list[0] : 1;
var b = typeof list[1] !== "undefined" ? list[1] : 2;
var c = typeof list[2] !== "undefined" ? list[2] : 3;
var d = typeof list[3] !== "undefined" ? list[3] : undefined;
a === 7;
b === 42;
c === 3;
d === undefined;

