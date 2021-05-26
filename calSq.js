//named function

function nCalSquare(a){
	return a*a;
}
console.log("Calling named function: "+nCalSquare(9));


//anonymous function
var aCal=function(b){
	return b*b;
}
console.log("Calling anonymous function: "+aCal(6));

//new constructor
var cCal=new Function("a", "return a*a;");
console.log("Calling constructor function: "+cCal(7));


//self invoking function
(function(a){

	console.log("Calling self invoked function: "+a*a);
	return a*a;
})(9);