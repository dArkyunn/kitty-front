function handleclicktoggle(id){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	document.getElementById(id).classList.toggle("pgalt");
	document.getElementById(id).classList.toggle("pg");
}
function handleclickswitch(){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	document.getElementById(arguments[0]).classList.toggle("pgalt");
	document.getElementById(arguments[0]).classList.toggle("pg");
        for (var i = 1; i < arguments.length; ++i){
            document.getElementById(arguments[i]).classList.remove("pgalt");
	    document.getElementById(arguments[i]).classList.add("pg");

	}
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
