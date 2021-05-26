//Dyanamically

function paraClicked(){
	document.getElementById("abc").setAttribute("style", "color:red");
}

document.getElementById("abc").addEventListener("click", paraClicked);



function paraMouseOver(){
	document.getElementById("abc").setAttribute("style", "color: blue");
}
document.getElementById("abc").addEventListener("mouseover", paraMouseOver);




//Statically
function buttonClick(){
	document.getElementById("b").setAttribute("style", "color: violet");
}

function buttonMouseOver(){
	document.getElementById("b").setAttribute("style", "color: yellow");
}