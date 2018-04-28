function checkpassword()
{
    var password = document.getElementById('password');
    var passwordcheck = document.getElementById('passwordcheck');
    var message = document.getElementById('confirmMessage');
    var message1 = document.getElementById('length');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if (document.getElementById('copy').checked) {
	checkcopy.style.color = "";
    }
    if (document.getElementById('human').checked) {
	checkhuman.style.color = "";
    }
    if(!namee.value.length == 0){
	namee.style.backgroundColor = "";
        namecheck.style.color = "";
	namecheck.innerHTML = "";
    }
    if(!email.value.length == 0){
	email.style.backgroundColor = "";
        emailcheck.style.color = "";
	emailcheck.innerHTML = "";
    }
    if(password.value.length == 0){
	return false;
    }
    if(password.value.length <= 8){
        passwordcheck.style.backgroundColor = "";
        password.style.backgroundColor = "";
	message.innerHTML = "";
        message.style.color = "";
	message1.innerHTML = "Password is too short";
	message1.style.color = "";
	return false;
    }
	else if(passwordcheck.value.length != password.value.length){
	message1.innerHTML = "";
	message.innerHTML = "";
        passwordcheck.style.backgroundColor = "";
        password.style.backgroundColor = "";
	}

	else{
	message1.innerHTML = "";
    if(password.value == passwordcheck.value){
        passwordcheck.style.backgroundColor = goodColor;
        password.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
	return true;
    }
    else{
        passwordcheck.style.backgroundColor = badColor;
        password.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
	return false;
    }
        }
}  
function checkform(){
    var pass = true;
    var password = document.getElementById('password');
    var passwordcheck = document.getElementById('passwordcheck');
    var message = document.getElementById('confirmMessage');
    var message1 = document.getElementById('length');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if (!document.getElementById('human').checked) {
	checkhuman.style.color = badColor;
        var pass = false;
    }
    if (!document.getElementById('copy').checked) {
	checkcopy.style.color = badColor;
        var pass = false;
    }
    if(password.value.length <= 8){
	password.style.backgroundColor = badColor;
        message1.style.color = badColor;
	message1.innerHTML = "Password is too short";
	var pass = false;
    }
    if(password.value.length == 0){
	password.style.backgroundColor = badColor;
        message1.style.color = badColor;
	message1.innerHTML = "Enter a password";
	var pass = false;
    }
    if(email.value.length == 0){
	email.style.backgroundColor = badColor;
        emailcheck.style.color = badColor;
	emailcheck.innerHTML = "Enter an email";
	var pass = false;
    }
    if(namee.value.length < 6){
	namee.style.backgroundColor = badColor;
        namecheck.style.color = badColor;
	namecheck.innerHTML = "Nickname too short";
	var pass = false;
    }
    if(namee.value.length == 0){
	namee.style.backgroundColor = badColor;
        namecheck.style.color = badColor;
	namecheck.innerHTML = "Enter your nickname";
	var pass = false;
    }
 if(password.value.length <= 8){
        passwordcheck.style.backgroundColor = "";
        password.style.backgroundColor = badColor;
	message.innerHTML = "";
        message.style.color = "";
	message1.innerHTML = "Password is too short";
	message1.style.color = badColor;
    }
	else{
	message1.innerHTML = "";
    if(password.value == passwordcheck.value){
        passwordcheck.style.backgroundColor = goodColor;
        password.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }
    else{
        passwordcheck.style.backgroundColor = badColor;
        password.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
	var pass = false;
    }
        }
    return pass;
}  


