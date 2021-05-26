function createPerson(){
	var person=new Object();
	person.name="Gauri";
	person.designation="Trainer";
	person.phno=5475632;
	return person;
}

var gauri=createPerson();






function createPerson2(){

	var person={};
	person.name="Gauri2";
	person.designation="Trainer";
	person.phno=54215893;
	return person;
}
gauri = createPerson2();







function createPerson3(){
	var person={};
	person["name"]="Gauri3";
	person["designation"]="Trainer";
	person["phno"]=542586;
	return person;
}
gauri=createPerson3();
alert("name: "+gauri.name+"designation: "+gauri.designation+" ph. no: "+gauri.phno);





function createPerson4(){
	var person={
		name:"Gauri4",
		age:60,
		designation:"Trainer",
		phno:12336544
	};
	return person;
}
gauri=createPerson4();





//Imp.
function person(){
	this.name="Gauri5";
	this.designation="Trainer";
	this.age=90;
}
gauri=new person();







var Animal={
	type:"Invertibrates",	//Property
	displayType:function(){alert("type is : "+this.type);}		//function
}
var horse=Object.create(Animal);	//creating hourse of animal type
//console.log(hourse)
horse.type="somethng else";	//change type
horse.displayType();	//to call it mathod by using object