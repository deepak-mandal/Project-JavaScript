var age = prompt("Enter your age: ");
age = parseInt(age);
if (age>60){
	document.write("As you are more than 60 year old, you have to control your salt & sugar intake!");
}
else if(age>30){
	document.write("As you are more than 30 year old, you have to take good care of your health");
}
else{
	document.write("<h1>As you are young, you can enjoy deep fried pokodas!</h1>");
}
