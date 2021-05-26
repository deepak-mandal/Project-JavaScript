var Trainer={
	name:"ABC",
	subject:["Maths", "Physics", "Chem"],
	teachers:["F", "S"],
	age:60
}
var properties="";
for (p in Trainer){
	properties+=p+" : ";
}
console.log("before deletion: "+properties);

delete Trainer.age;

var properties="";
for (p in Trainer){
	properties+=p+" : ";
}
console.log("after deletion: "+properties);


