subject=new Array("Maths", "Physics", "Chemistry");
marks=new Array();
for (var i=0; i<subject.length; i++){
	num=prompt("Enter your marks in "+subject[i]+" subject");
	marks[i]=parseInt(num);
}

msg=" ";
for (var i=0; i<subject.length; i++)
	msg+=subject[i] + "Marks = "+marks[i]+"\n";
alert(msg);