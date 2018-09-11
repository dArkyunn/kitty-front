var currentTheme = "dark";
var apiServerAddress = "http://localhost";
var apiServerPort = 7777;
var socketIOPort = 8080;
var socketIOAddress = "localhost";
var currentPlayground = "";
var socketConnected = false;
var addressBase = "";

var socket = io('http://'+socketIOAddress+':'+socketIOPort);

socket.on('connect', function() {
    console.log("Connected to main C&C server");
    changeSocketConnectionIndicator(true);
});

function changeSocketConnectionIndicator(isConnected) {
      if (isConnected) {
          $("#socket_connection_status_indicator_footer").text( "Connected" );
          document.getElementById("socket_connection_status_indicator_footer").style.color = "#44FF3B";
      } else {

      }
}

$( "#login_action_button").click(function() {
    var username = $( "#login_form_username_email" ).val();
    var password = $( "#login_form_password" ).val();
    isEmptyField("dsd");
    if (isEmptyField(username) || isEmptyField(password)) {
      swal("Błąd", "Wprowadź swoje hasło oraz nazwę użytkownika lub adres email", "error");
    } else {
  	  login(username, password);
    }
});

$( "#register_action_button").click(function() {
    var username = $( "#register_form_username" ).val();
    var email = $( "#register_form_email" ).val();
    var name = $( "#register_form_name" ).val();
    var surname = $( "#register_form_surname" ).val();
    var password = $( "#register_form_password" ).val();
    var password2 = $( "#register_form_password2" ).val();
    var accountType = document.getElementsByName('accountTypeSelectRadio').value;
    accountType = 1;
    console.log(accountType);
    if (password == password2) {
        var newUserData = {};
        newUserData.email = email;
        newUserData.username = username;
        newUserData.password = password;
        newUserData.name = name;
        newUserData.surname = surname;
        newUserData.account_type = accountType;
        if (isEmptyField(username) || isEmptyField(password)) {
          swal("Błąd", "Wypełnij wszystkie pola", "error");
        } else {
          register(newUserData);
        }
    } else {
      swal("Błąd", "Podane hasła nie są identyczne", "error");
    }

});

function changeGlobalPlaygroundMainColor(newMainColor) {
    //$( "#chat" )
    //$( "#controls" )

}

function changeGlobalPlaygroundDerivativeColor(newDerivativeColor) {

}

/* when socket is Connected
// Start latency checking
var startTime = 0;
setInterval(function() {
    startTime = Date.now();
    socket.emit('ping');
}, 1000);

socket.on('pong', function() {
  latency = Date.now() - startTime;
  //console.log(latency);
  $("#latency_ms").html( "" );
  $("#latency_ms").html( latency );
});
*/

function isEmptyField(str){
    if (str == undefined) {
      return true
    } else {
      return !str.replace(/^\s+/g, '').length; // boolean (`true` if field is empty)
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function deleteRow(btn) {
  $(btn).closest("tr").remove();
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


function initPage() {
  loggedUserId = getCookie('user_id');
  loggedUserAuthToken = getCookie('auth_token');
}


function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}



function loadHeaderMenu() {
	var loggedin = false;
	if (loggedin == false){
  var headerMenuHTML = `<!-- Nav -->
    <nav id="menu">
      <ul class="links">
        <li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="playgrounds.html"><i class="fa fa-paw"></i> Playgrounds</a></li>
        <li><a href="elements.html">Configuration</a></li>

        <li><a href="elements.html">Elements</a></li>
      </ul>
    </nav>`;
	}
	else{
  var headerMenuHTML = `<!-- Nav -->
    <nav id="menu">
      <ul class="links">
        <li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="playgrounds.html"><i class="fa fa-paw"></i> Playgrounds</a></li>
        <li><a href="elements.html">Your playgrounds</a></li>
        <li><a href="elements.html">Your kitties</a></li>
        <li><a href="elements.html">Configuration</a></li>


      </ul>
    </nav>`;
	}

    document.getElementById("kitty_website_header_menu").innerHTML = headerMenuHTML;

}

function loadHeader () {
	var loggedin = false;
	if (loggedin == false){
  var headerHTML = `		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<!-- Header -->
    <header id="header">
      <h1><a href="index.html">KittyUniverse</a></h1>

      <a id="login_button_header" href="login.html"><i class="fa fa-sign-in-alt"></i> Login</a>
      <a id="register_button_header" href="signup.html"><i class="fa fa-paw"></i> Create account</a>

    <a href="#menu"></a>
    </header>`;
	}
	else{
  var headerHTML = `		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<!-- Header -->
    <header id="header">
      <h1><a href="index.html">KittyUniverse</a></h1>

      <a id="login_button_header" href="login.html"><i class="fa fa-sign-in"></i> Log out</a>
      <a id="register_button_header" href="signup.html"><i class="fa fa-paw"></i> Kurko</a>

    <a href="#menu"></a>
    </header>`;


	}

    document.getElementById("kitty_website_header").innerHTML = headerHTML;

}

function updateMainFooterStats() {
  // Connected color: #44FF3B
  // Connecting color: #F5FF33
  // Disconnected color: #E6001B
}


function loadFooter() {
  var footerHTML = `<!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <div class="flex flex-3">
          <div class="col">
            <h3>Join the community</h3>
            <ul class="alt">
              <li><a href="#">Forums</a></li>
              <li><a href="#">Vis id faucibus montes tempor</a></li>
              <li><a href="#">Massa amet lobortis vel.</a></li>
              <li><a href="#">Nascetur nunc varius commodo.</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Become a kitty</h3>
            <ul class="alt">
              <li><a href="#">Discover how to add new playgrounds</a></li>
              <li><a href="#">Vis id faucibus montes tempor</a></li>
              <li><a href="#">Massa amet lobortis vel.</a></li>
              <li><a href="#">Nascetur nunc varius commodo.</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Support us</h3>
            <ul class="alt">
              <li><a href="#">Contact</a></li>
              <li><a href="donate.html">Donate</a></li>
              <li><a href="#">Massa amet lobortis vel.</a></li>
              <li><a href="#">Nascetur nunc varius commodo.</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <ul class="icons">
          <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="icon fa-snapchat"><span class="label">Snapchat</span></a></li>
        </ul>
        <b>Made with <font color="#E6001B;"><i class="fa fa-heart"></i></font> by Wiktor Jezioro and Damian Kurek - All belongs to KittyAlliance</b>
        <br>
        Online users counter:  <b>Loading...</b>  Total today unique views:  <b>Loading...</b>  , Socket connection status: <b><font id="socket_connection_status_indicator_footer" color="#F5FF33;">Connecting...</font></b> , Web API connection status: <b><font id="webapo_connection_status_indicator_footer" color="#F5FF33;">Connecting...</font></b>
        <br>
        &copy; KittyAlliance <i class="fa fa-paw"></i> Design: <a href="https://templated.co">TEMPLATED</a> and KittyAlliance

      </div>
    </footer>`;

    document.getElementById("kitty_website_footer").innerHTML = footerHTML;
}


function redirectPageToRoute (destination) {
      window.location.href = addressBase+destination.toString();
}



function refreshPage() {
    location.reload();
}



function logout() {
    setCookie("is_logged",false,7);
    setCookie("auth_token", null, 90);
    setCookie("user_id", null, 90);
    refreshPage();
}





function login(username_email, password) {
  showMainLoader();
  $.ajax({
      //  headers: {"x-api-key" : "123ABC987XYZ"},
      url: apiServerAddress + ":" + apiServerPort + "/account/login",
      type: "POST",
      dataType: "json",
      data: {
       username: username_email,
       password: password
      },
      success: function(response) {
          if (response.status == "success") {
              setCookie("is_logged", true, 90);
              setCookie("auth_token", response.token, 90);
              setCookie("user_id", response.userid, 90);
              refreshPage();
          } else if (response.status == "access_denied") {
              swal("Błąd logowania", "Podane dane logowania są nieprawidłowe! Proszę spróbować ponownie :)", "error");
          } else {
              swal("Nieoczekiwany wyjątek", "Wystąpił błąd podczas wyświetlania informacji o błędzie!", "error");
          }
          hideMainLoader ();
      },
      error: (xhr, status, error) => {
          console.log("Server connection error");
          swal("Błąd połączenia", "Wystąpił błąd podczas połączenia z serwerem! Proszę spróbować ponownie później.", "error");
          hideMainLoader();
      }
  });
}

function register(newUserData) {
  showMainLoader();
  $.ajax({
      //  headers: {"x-api-key" : "123ABC987XYZ"},
      url: apiServerAddress + ":" + apiServerPort + "/account/register",
      type: "POST",
      dataType: "json",
      data: {
       newUserData
      },
      success: function(response) {
          if (response.status == "success") {
              swal("Zarejestrowano", "Twoje konto zostało zarejestrowane! Teraz możesz aktywować swoje konto klikając link w wiadomości e-mail.", "success").then(function () {
                  //redirectPageToRoute("/login");
              });
          } else if (response.status == "error") {
              swal("Błąd!", "Wystąpił błąd podczas rejestracji! Proszę spróbować pozownie później", "error");
          } else {
              swal("Nieoczekiwany wyjątek", "Wystąpił błąd podczas wyświetlania informacji o błędzie!", "error");
          }
          hideMainLoader ();
      },
      error: (xhr, status, error) => {
          console.log("Server connection error");
          swal("Błąd połączenia", "Wystąpił błąd podczas połączenia z serwerem! Proszę spróbować ponownie później.", "error");
          hideMainLoader();
      }
  });
}


function virtuallyAdoptRequest(kittyID) {
  showMainLoader();
  $.ajax({
      //  headers: {"x-api-key" : "123ABC987XYZ"},
      url: apiServerAddress + ":" + apiServerPort + "/kitty/:id/adopt/virtual",
      type: "POST",
      dataType: "json",
      data: {
       newUserData
      },
      success: function(response) {
          if (response.status == "success") {
              if (response.adoption.is_paid == true) {
                swal("Udało się!", "Adopcja wirtualna przebiegła pomyślnie! Od teraz stałęś się wirtualnym opiekunem kotka na ", "success").then(function () {
                    redirectPageToRoute("/yourVirtualAdoptions");
                });
              } else {
                swal("Udało się!", "Adopcja wirtualna została zapisana pomyślnie! Pozostało tylko wpłacić wymaganą kwotę na konto KittyUniverse :)", "success").then(function () {
                    redirectPageToRoute("/yourVirtualAdoptions");
                });
              }
          } else if (response.status == "error") {
              swal("Błąd!", "Wystąpił błąd podczas wysyłania żądania! Proszę spróbować pozownie później", "error");
          } else {
              swal("Nieoczekiwany wyjątek", "Wystąpił błąd podczas wyświetlania informacji o błędzie!", "error");
          }
          hideMainLoader ();
      },
      error: (xhr, status, error) => {
          console.log("Server connection error");
          swal("Błąd połączenia", "Wystąpił błąd podczas połączenia z serwerem! Proszę spróbować ponownie później.", "error");
          hideMainLoader();
      }
  });
}



function loadPage() {
  loadHeader();
  loadHeaderMenu();
  loadFooter();
}

loadPage(); // excute on file load
