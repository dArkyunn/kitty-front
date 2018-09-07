
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
  var headerMenuHTML = `<!-- Nav -->
    <nav id="menu">
      <ul class="links">
        <li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="playgrounds.html"><i class="fa fa-paw"></i> Playgrounds</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
    </nav>`;

    document.getElementById("kitty_website_header_menu").innerHTML = headerMenuHTML;

}

function loadHeader () {
  var headerHTML = `<!-- Header -->
    <header id="header">
      <h1><a href="index.html">KittyUniverse</a></h1>
      <a href="login.html"><i class="fa fa-sign-in"></i> Login</a>
      <a href="signup.html"><i class="fa fa-paw"></i> Create account</a>
    <a href="#menu"></a>
    </header>`;

    document.getElementById("kitty_website_header").innerHTML = headerHTML;

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
        &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Coverr</a>. Video: <a href="https://coverr.co">Coverr</a>.
        <br></br>
        Made by Wiktor Jezioro and Damian Kurek
      </div>
    </footer>`;

    document.getElementById("kitty_website_footer").innerHTML = footerHTML;
}

function loadPage() {
  loadHeader();
  loadHeaderMenu();
  loadFooter();
}

loadPage(); // excute on file load
