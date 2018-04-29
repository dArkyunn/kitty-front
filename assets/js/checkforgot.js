function checkemail(){
    var emailcheck = document.getElementById('emailforgot');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
  if(emailcheck.value.length != 0){
	emailforgot.style.backgroundColor = "";
	emailforgottxt.innerHTML = "";
    }
}
function checkemailforgot(){
    var emailcheck = document.getElementById('emailforgot');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
  if(emailcheck.value.length == 0){
	emailforgot.style.backgroundColor = badColor;
        emailforgottxt.style.color = badColor;
	emailforgottxt.innerHTML = "Enter an email";
	return false;
    }
}