/*get elements by classname
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";



for(let i=0;i< items.length;i++){
    items[i].style.fontWeight="900";
    
}

*/

//getElementsByTagName 
/*\
var items = document.getElementsByTagName('li');
items[2].style.backgroundColor="green";



for(let i=0;i< items.length;i++){
    items[i].style.fontWeight="900";
    
}
*/

//queryselector 
var secItem = document.querySelector(".list-group-item:nth-child(2)");
secItem.style.backgroundColor="green"
var thirdItem = document.querySelector(".list-group-item:nth-child(3)")
thirdItem.style.display="none"

var items= document.querySelectorAll(".list-group-item")
items[1].style.color="green"
var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i =0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"
    
}
