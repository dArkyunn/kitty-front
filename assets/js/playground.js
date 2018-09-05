 var socket = io('ws://localhost:8080');
	socket.emit('adduseranon', "Kurko");
	socket.on('updatestatus', function(id){
		if (id == 1 || id == 2 || id == 3 || id == 4){
	            document.getElementById("1").classList.remove("pgalt");
		    document.getElementById("1").classList.add("pg");
	            document.getElementById("2").classList.remove("pgalt");
		    document.getElementById("2").classList.add("pg");
	            document.getElementById("3").classList.remove("pgalt");
		    document.getElementById("3").classList.add("pg");
	            document.getElementById("4").classList.remove("pgalt");
		    document.getElementById("4").classList.add("pg");
		    document.getElementById(id).classList.add("pgalt");
		}
		if (id == 5 || id == 6 || id == 7 || id == 'b'){
			document.getElementById(id).classList.toggle("pgalt");
			document.getElementById(id).classList.toggle("pg");
			setTimeout(function(){
				document.getElementById(id).classList.toggle("pgalt");
				document.getElementById(id).classList.toggle("pg");

			}, 150);
		}
		if (id == 9 || id == 'a'){
			document.getElementById(id).classList.toggle("pgalt");
			document.getElementById(id).classList.toggle("pg");
		}

 });

var maxpages = 20;
function sendclick(id){
	socket.emit('sendaction', id);

}
function handleclickswitch(){
	socket.emit('sendaction', arguments[0]);
}
function handlecolor(idfarb,id){
	var color = document.getElementById(idfarb).value;
	document.getElementById(id).style.backgroundColor = color;

}
function handleclickcolor(id){
	if(!$('#menuu').is(":visible")) {
	$("#" + id).show();	
	}
	else{
        $('#' + id).hide();
    }
}


function handleclickflash(id){
	socket.emit('sendaction', id);
}
function loadcontrols(){
	slider();
	roundslider();
	roundquarterslider();
	verticalslider();
}
function slider(){
	var html = `<div class="control">
 			 <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
			</div>`
	$("#controls").append(html);


}
function verticalslider(){
	var html = `<div class="control">
 			 <input orient="vertical" style="height:160px;" type="range" min="1" max="100" value="50" class="slider" id="myRange">
			</div>`
	$("#controls").append(html);


}

function roundslider(){
	var html =`<div class="control">
                	<div id="type"></div>
            	   </div>
		<style>
		#type .rs-range-color  {
    background-color: #5673E7;
}
#type .rs-path-color  {
    background-color: #dedede;
}
#type .rs-handle  {
    background-color: #000000;
}
#type .rs-border  {
    border-color: black;
}
#type .rs-bg-color  {
    background-color: #333333;
    opacity:1;
}

</style>`
	$("#controls").append(html);

            $("#type").roundSlider({
                value: 45,
		radius: 80,
   		width: 14,
  	        handleSize: "24,12",
  	        handleShape: "square",
 	        sliderType: "min-range",
   	        value: 40
            });


}
function roundquarterslider(){
	var html =`<div style="height:160px;width:270px;"class="control">
                	<div id="type1"></div>
            	   </div>
		<style>
		#type1 .rs-range-color  {
    background-color: #5673E7;
}
#type1 .rs-path-color  {
    background-color: #dedede;
}
#type1 .rs-handle  {
    background-color: #000000;
}
#type1 .rs-border  {
    border-color: black;
}
#type1 .rs-bg-color  {
    background-color: #333333;
    opacity:1;
}
#type1  {
    height: 100% !important;
    width: 100% !important;
    overflow: hidden;
    padding: 10px;
}
#type1 .rs-container  {
    left: 50%;
    margin-left: -180px;
    height:360px !important;
    width:360px !important;
}
#type1 .rs-tooltip  {
    margin-top:-80px !important;
}

</style>`
	$("#controls").append(html);

            $("#type1").roundSlider({
    		sliderType: "min-range",
   		circleShape: "custom-quarter",
   		min: 0,
  		max: 11,
    		value: 11,
    		startAngle: 45,
		editableTooltip: false,
    		radius: 300,
    		width: 20,
    		handleShape: "dot",
    		tooltipFormat: "tooltipVal1"
             });


}

loadcontrols();

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
	var maxpages=20;
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
