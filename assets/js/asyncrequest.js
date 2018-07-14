window.addEventListener("load", function () {
  
	/*function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
 
*/ 
  // Access the form element...

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    if(!checkform()){
    var form = document.getElementById("form");
    event.preventDefault();
	// Access the form element...
    register(form);
    }
  });
   
   //...and take over its submit event.
  forgotform.addEventListener("submit", function (event) {
    event.preventDefault();
    // Access the form element...
    if(checkemailforgot()){ 
    var form = document.getElementById("forgotform");
    forgot(form);
    }
  });
    logform.addEventListener("submit", function (event) {
    event.preventDefault();
    // Access the form element...
    if(checklogin()){
    var form = document.getElementById("logform");
    login(form);
    }
  });
    kittyform.addEventListener("submit", function (event) {
    event.preventDefault();
    // Access the form element...
    if(checklogin()){
    var form = document.getElementById("kittyform");
    addKitty(form);
    }
  });


});

var config = {
  protocol: "https",
  address: "api.kittyuniverse.com",
  port: "443"
};

function synchronousAddKitty(kittyData) {
    var xhttp = new XMLHttpRequest();
    var endpoint = "/kitty/new"
    xhttp.open("POST", config.protocol+"://"+config.address+":"+config.port, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(kittyData);
    var response = JSON.parse(xhttp.responseText);
    return response;
}

// ASYNC REST API REQUEST FUNCTIONS //

function addKitty(kittyData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    var endpoint = "/kitty/new";
    xhr.open("POST", config.protocol+"://"+config.address+":"+config.port, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(kittyData);
}

function register(registerData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    var endpoint = "/account/create";
    xhr.open("POST", config.protocol+"://"+config.address+":"+config.port, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(registerData);
}
function login(registerData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    var endpoint = "/account/login";
    xhr.open("POST", config.protocol+"://"+config.address+":"+config.port, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(registerData);
}

function forgot(registerData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    var endpoint = "/account/forgot";
    xhr.open("POST", config.protocol+"://"+config.address+":"+config.port, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(registerData);
}

function deleteKitty(kittyId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    var endpoint = "/kitty/"+kittyId;
    xhr.open("DELETE", config.protocol+"://"+config.address+":"+config.port, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
}
