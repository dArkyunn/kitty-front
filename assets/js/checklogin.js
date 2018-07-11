function checklog(){
    var username = document.getElementById('namelog');
    var passwd = document.getElementById('passwdlog');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
  if(passwd.value.length != 0){
	passwdlog.style.backgroundColor = "";
	passwdlogtxt.innerHTML = "";
    }
  if(username.value.length != 0){
	namelog.style.backgroundColor = "";
	namelogtxt.innerHTML = "";
    }
}
function checklogin(){
    var pass = true;
    var username = document.getElementById('namelog');
    var passwd = document.getElementById('passwdlog');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
  if(passwd.value.length == 0){
	passwdlog.style.backgroundColor = badColor;
        passwdlogtxt.style.color = badColor;
	passwdlogtxt.innerHTML = "Enter a password";
	var pass = false;
    }
  if(username.value.length == 0){
	namelog.style.backgroundColor = badColor;
        namelogtxt.style.color = badColor;
	namelogtxt.innerHTML = "Enter a nickname";
	var pass = false;
    }
return pass;
}
