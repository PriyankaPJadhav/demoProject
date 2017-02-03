

function setUserName() {
 var p = document.createElement('p');
 p.textContent= "This is a para";
 document.body.appendChild(p);
}
var buttons = document.querySelectorAll('button');
for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', setUserName);
}
