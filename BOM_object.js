function windowOperation(){
	//window.open()		//new tab

	//window.open("", "newWindow", "height=100, width=200");	//pop up window


	var newWindow=window.open("https://deepak-mandal.github.io", "newWindow", "height=100, width=200");
	newWindow.moveTo(200, 150);


	//To close the window
	newWindow.close();
	
	//to close the current window
	window.close();
}





function screenObject(){
	document.write("screen width: "+screen.width)
	document.write(screen.availWidth)	//try in console 

}



function navigatorProp(){

	document.write("<br> appcodeName: "+navigator.appCodeName);
	document.write("<br> appName: "+navigator.appName);
	document.write("<br> platform: "+navigator.platform);
	document.write("<br> cookie is enabled: "+navigator.cookieEnabled);
	document.write("<br/> product: "+navigator.product);

}
navigatorProp();




function locationProp(){
	console.log("href of the location: "+location.href);
	document.write("<br/>href of the location: "+location.href);
	document.write("<br/>host: "+location.host);
	document.write("<br>protocol: "+location.protocol);
}
locationProp();




