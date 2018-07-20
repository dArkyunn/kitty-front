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
	document.getElementById(arguments[0]).classList.add("pgalt");
        for (var i = 1; i < arguments.length; ++i){
            document.getElementById(arguments[i]).classList.remove("pgalt");
	    document.getElementById(arguments[i]).classList.add("pg");

	}
}
function handlecolor(idfarb,id){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	var color = document.getElementById(idfarb).value;
	document.getElementById(id).style.backgroundColor = color;

}
function handleclickcolor(id){
	//var button=document.getElementById(id);
	//button.classList.toggle("pgalt");
	//button.classList.toggle("pg");
	if(!$('#menuu').is(":visible")) {
	$("#" + id).show();	
	}
	else{
        $('#' + id).hide();
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

	}, 150);


}
function switchpage(id){
	var a = document.getElementsByClassName("active");
	a[0].className="";
  	document.getElementById(id).className = 'active';
}
