function active(id) {
	var a = document.getElementsByClassName("active");
	a[0].className="";
  	document.getElementById(id).className = 'active';
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>LOLOLOLOLOL</p></section>";	
}
