//your JS code here. If required.

function findDomlevel(){

	let target = document.getElementById("level");
let c=1;
	
	while(target.parentElement!==null){
		c++;
		target=target.parentElement;
	}
	alert("the level of the element :"n);
}