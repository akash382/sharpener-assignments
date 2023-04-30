//traversing the Dom
var itemList = document.querySelector("#items");
//parent node and ParentELement is the same thing 

//itemList.parentElement.style.backgroundColor = "#f4f4f4";


//child node
//itemList.lastElementChild.style.color ="red";

//firstchild
itemList.firstChild.style.color="red";

//firstELementChild
itemList.firstElementChild.textContent="helo1";

//lastChild
itemList.lastChild.textContent="helo4";

//nextSibling
itemList.nextSibling.style.color="green";

//nextELementSIbling but in this there is no nextSIbling
itemList.nextElementSibling.style.backgroundColor="yellow";

itemList.previousSibling.style.backgroundColor="green";

//createELement
//create a div
var newDiv = document.createElement('div');
//adding a classname
newDiv.className="HELLO";
//adding an id
newDiv.id="HELLO1";
newDiv.setAttribute("title","Hello Div");
console.log(newDiv);

var newDivText = document.createTextNode("hello");

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1=document.querySelector("header h1")

container.insertBefore(newDiv,h1);


var newDiv2 = document.createElement("div");
newDiv2.className="second";
newDiv2.id="secondId";
newDiv2.setAttribute("title","Hello second");

var newDiv2Text = document.createTextNode("hello");
newDiv2.appendChild(newDiv2Text);

var container = document.querySelector("header .items");
var h2 = document.querySelector("header h2");
container.insertBefore(newDiv2,h2);

