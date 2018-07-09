function active(id) {
	var a = document.getElementsByClassName("active");
	a[0].className="";
  	document.getElementById(id).className = 'active';
	if (id == 1){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>Section 1</p></section>";	
	}
	if (id == 2){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>Section 2</p></section>";	
	}
	if (id == 3){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>Section 3</p></section>";	
	}
	if (id == 4){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>Section 4</p></section>";	
	}
	if (id == 5){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>Section 5</p></section>";	
	}

}
