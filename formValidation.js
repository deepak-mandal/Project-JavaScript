function validateForm(){
	//check whether name is added or not
	var name=document.getElementById("name");
	var phno=document.getElementById("phno");

	if (name.value == ""){
		alert("Please enter some number in Name");
		return false;
	}
	if (!(isNaN(name.value))){
		alert("Please enter text value in Name");
		return false;
	}
	if (isNaN(phno.value)){
		alert("Please enter num value in Ph no.");
		return false;
	}

}



