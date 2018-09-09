	var config = { "publicemail":"ny", "oldpass": "", "newpass": "", "confpass":"", "chgemail": "", "chgemailpwd": "", };
	//Parse configuration from server
	/*
	* * * *
	*/
function checkcheckbox(id){
	if (id.checked){
		config.publicemail = "y";
	}
	else{
		config.publicemail = "n";
	}



	}

function active(id) {
	var a = document.getElementsByClassName("active");
	a[0].className="";
  	document.getElementById(id).className = 'active';
	if (id == 1){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Name</h1><h1>Set profile picture</h1><h1>Description</h1></section>";	
	document.getElementById('confhead').innerHTML = "Profile";	
	}
	if (id == 2){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Location/Timezone</h1><h1>Language</h1></section>";	
	document.getElementById('confhead').innerHTML = "General";		
	}
	if (id == 3){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><br></br><input type='checkbox' onchange='checkcheckbox(this)' id='copy' name='copy'><label id='pubemail' for='copy'>Allow my name to be publicly displayed</label></input><br></br><input type='checkbox' onchange='checkcheckbox(this)' id='contactme' name='copy'><label id='pubemail' for='copy'>Allow other people to contact me through e-mail</label></input>  </section>";	
	if (config.publicemail == "y"){
	document.getElementById("copy").checked = true;
	}
	document.getElementById('confhead').innerHTML = "Privacy";	
}
	if (id == 4){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Change password</h1><form method='post' id='logform'><input style='z-index:102;' type='password' name='name' id='namelog' value='' placeholder='Old password' /><label for='passwordlog' id='passwdlogtxt' class='length'></label><input style='z-index:102;' type='password' name='name' id='namelog' value='' placeholder='New password' /><label for='namelog' id='namelogtxt' class='lola'></label><input style='z-index:200;' type='password' name='password' id='passwdlog' value='' placeholder='Confirm Password' /><label for='passwordlog' id='passwdlogtxt' class='length'><button class='button alt' style='margin-left:93.3%;margin-top:1%;z-index:101;'>Confirm</button><br></br><h1>Change email</h1><input style='z-index:102;' type='text' name='name' id='namelog' value='' placeholder='Password' /></label></section></form>";	

	document.getElementById('confhead').innerHTML = "Account";	
}
	if (id == 5){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Bandwidth limit</h1></section>";	
	document.getElementById('confhead').innerHTML = "Network";	
}
	if (id == 6){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Set your crypto address</h1></section>";	
	document.getElementById('confhead').innerHTML = "Cryptopayments";	
}
	if (id == 7){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Set page style (night/day)</h1> <input type='checkbox' onchange='checkcheckbox(this)' id='contactme' name='copy'><label id='pubemail' for='copy'>Disable fancy JavaScript styles</label></input> </section>";	
	document.getElementById('confhead').innerHTML = "Style";	
}
	if (id == 8){
	document.getElementById('configuration').innerHTML= "<section class='wrapperconf'><h1>Set SSH/GPG keys</h1></section>";	
	document.getElementById('confhead').innerHTML = "Security";	
}

}
