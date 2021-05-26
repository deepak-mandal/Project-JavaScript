console.log("hello everyone!!");	//for in console
document.write("hello everyone_browser");	//In browser

var general;	//declearing not initilizing
console.log(general);

general=6;
//To check the data type
console.log(typeof general);


general="hi";
console.log(typeof general);

general='hi';
console.log(typeof general);


general=true;
console.log(typeof general);


general=null;	//object type
console.log(typeof general);


general=[5, 34, 2, 1];
console.log(typeof general);	//object type of value
console.log(general.length);	//To get len of arr

var space=["moon", "star", "sun"];

var space1 = new Array("moon", "star", "sun");
console.log("space: "+space);
console.log("space1: "+space1);

var bodies = space[0] + space[1] + space[2];

console.log("bodies: "+bodies);

space[0] = "planet";
console.log("space: "+space);


console.log(2+3);
console.log("Hi "+"there");
console.log(2+"Hi");


var num1=5;
var num2=num1+5;
var num3=num1+"5";	//string dtypes


var num7=prompt("Enter some value: ");
console.log("type of input: "+typeof num7);

console.log(parseInt(num7) + 9);

alert("hi, this is an alert");