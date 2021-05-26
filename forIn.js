//for loop & for in
var subject=["maths", "Physics"];

var marks = new Array();
var num1;

for (var j=0; j<subject.length; j++){
	num1=parseFloat(prompt("Enter marks for subject "+subject[j]));
	marks[j]=num1;
}

for(m in marks){
	console.log(marks[m]);
	document.write(marks[m]);
}