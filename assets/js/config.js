function active(id) {
	var list = document.getElementsByClassName("active");
	for (var i = 0; i < list.length; i++) {
	    // list[i] is a node with the desired class name
		list[i].className="";
	}
  	document.getElementById(id).className = 'active';
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><p>LOLOLOLOLOL</p></section>";	
}
