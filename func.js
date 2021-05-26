/*

//named function

function addNum(a, b){

	console.log("function addNum is called ");
	return a+b;
}

console.log(addNum(2, 3));
*/



/*
//Anonymous fuction
//stored in a variable
var anon=function(a, b){
	console.log("anonymous function is called");
	return a+b;
}
anon(5, 6);

//setTimeout(anon, 3000);
//or define a function
setTimeout(function(){console.log("anonymous function call in setTimeout")}, 3000);
*/




/*
//using constructor
var cons=new function("a", "b", "console.log('in constructor function')", "return a+b",

console.log(cons(3, 5));
*/



//self invoking function
(function(a, b){
	console.log("in self invoking function");
	return a+b;
})(2, 6);


