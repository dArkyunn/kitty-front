function handleclicktoggle(id){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	document.getElementById(id).classList.toggle("pgalt");
	document.getElementById(id).classList.toggle("pg");
}
function handleclickflash(id){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	document.getElementById(id).classList.toggle("pgalt");
	document.getElementById(id).classList.toggle("pg");
	setTimeout(function(){
	document.getElementById(id).classList.toggle("pgalt");
	document.getElementById(id).classList.toggle("pg");

	}, 160);


}
