// JavaScript Document


var myDemo= document.getElementById("parent");

console.log(myDemo.childNodes.length);

var myDemoTags= document.getElementsByTagName("li");

console.log("Number of li links:" + myDemoTags.length);

var linksInNav = myDemo.getElementsByTagName("li");

console.log("Number of li links in navigation:" + linksInNav.length);

var myComments = document.getElementById("words");

myComments.setAttribute("aligh","right");

myComments.setAttribute("style","color:white");

var newItem = document.createElement("li");

var newText = document.createTextNode("Yay!");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

