
/*
	Author: Benjamin R. Olson
	Date: March 22, 2014
	Description: data management system
		to interface between UI and persistence methods:
		the following functions should bind to native methods
		that send and receive data and persist the data in local storage
*/

//variables
var fromLang = "en",
	toLang = "en";

//functions
//used in obsTpage2.htm
function setLang(toOrFrom, lang)
{
	if (toOrFrom == "from")
	{
		fromLang = lang;
		document.getElementById("from").innerHTML="Translate From: " + 
			document.getElementById(fromLang).innerHTML;
	}
	else
	{
		toLang = lang;
		document.getElementById("to").innerHTML="Translate To: " + 
			document.getElementById(toLang).innerHTML;
	}
	//call native method to persist preferences
	
}