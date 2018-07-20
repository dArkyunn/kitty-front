	var maxpages = 20;
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
function gotopage(id){
	var a = document.getElementsByClassName("active");
	a[0].className="";
	if (id == "first"){
		document.getElementById("1").innerHTML = "1"; 
		document.getElementById("2").innerHTML = "2"; 
		document.getElementById("3").innerHTML = "3";  
		document.getElementById("4").innerHTML = "4"; 
		document.getElementById("5").innerHTML = "5"; 
		document.getElementById("6").innerHTML = "6"; 
		document.getElementById("1").className = 'active';
	}
		if (id == "last"){
		document.getElementById("1").innerHTML = +maxpages - 5; 
		document.getElementById("2").innerHTML = +maxpages - 4; 
		document.getElementById("3").innerHTML = +maxpages - 3;  
		document.getElementById("4").innerHTML = +maxpages - 2; 
		document.getElementById("5").innerHTML = +maxpages - 1; 
		document.getElementById("6").innerHTML = +maxpages; 
		document.getElementById("6").className = 'active';
	}


}
function switchpage(id){
	var a = document.getElementsByClassName("active");
	a[0].className="";
	if(id == '5' && +document.getElementById("6").innerHTML < +maxpages){
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML + 1 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML + 1 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML + 1 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML + 1 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML + 1 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML + 1 ; 
		document.getElementById(+id - 1).className = 'active';
	}
	else if(id == '6' && +document.getElementById("6").innerHTML < +maxpages - 1){	
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML + 2 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML + 2 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML + 2 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML + 2 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML + 2 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML + 2 ; 
		document.getElementById(+id - 2).className = 'active';
	}
	else if(id == '6' && +document.getElementById("6").innerHTML < +maxpages){	
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML + 1 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML + 1 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML + 1 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML + 1 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML + 1 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML + 1 ; 
		document.getElementById(+id - 1).className = 'active';
	}

	else if(id == '1' && +document.getElementById("1").innerHTML == "2" ){
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML - 1 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML - 1 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML - 1 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML - 1 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML - 1 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML - 1 ; 
		document.getElementById(+id + 1).className = 'active';
	}
	else if(id == '1' && +document.getElementById("1").innerHTML > "2"){
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML - 2 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML - 2 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML - 2 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML - 2 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML - 2 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML - 2 ; 
		document.getElementById(+id + 2).className = 'active';
	}
	else if(id == '2' && +document.getElementById("2").innerHTML > "2"){
		document.getElementById("1").innerHTML =  +document.getElementById("1").innerHTML - 1 ; 
		document.getElementById("2").innerHTML =  +document.getElementById("2").innerHTML - 1 ; 
		document.getElementById("3").innerHTML =  +document.getElementById("3").innerHTML - 1 ; 
		document.getElementById("4").innerHTML =  +document.getElementById("4").innerHTML - 1 ; 
		document.getElementById("5").innerHTML =  +document.getElementById("5").innerHTML - 1 ; 
		document.getElementById("6").innerHTML =  +document.getElementById("6").innerHTML - 1 ; 
		document.getElementById(+id + 1).className = 'active';
	}
	else{
		document.getElementById(id).className = 'active';


	}


}
