// JavaScript Document

var todayIs = prompt("What is today?");

switch(todayIs){
	case "Monday" :
		alert ("Boo!");
		break;
		
	case "Tuesday" :
		alert ("Tuesday is just second Monday");
		break;
		
	case "Wednesday" :
		alert ("Half way there!");
		break;
		
	case "Thursday" :
		alert ("Almost Friday!");
		break;
		
	case "Friday" :
		alert ("It's 5 o'clock somewhere!");
		break;
		
	default :
		alert ("It's the weekend!");
}

var myDemo= document.getElementById("parent");

console.log(myDemo.childNodes.length);

var myDemoTags= document.getElementsByTagName("li");

console.log("Number of li links:" + myDemoTags.length);

var linksInNav = myDemo.getElementsByTagName("li");

console.log("Number of li links in navigation:" + linksInNav.length);

var myComments = document.getElementById("words");

myComments.setAttribute("aligh","right");

myComments.setAttribute("style","color:red");

var newItem = document.createElement("li");

var newText = document.createTextNode("Surprise!");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

