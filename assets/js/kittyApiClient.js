
var kittyApiURL = "api.kittyuniverse.org";
var kittyApiProtocol = "https://"

function loginRequestAsync (nick, password, callback) {
  jQuery.ajax({
        url: kittyApiProtocol+kittyApiURL+"/account/new",
        dataType: "json",
        async: true,
        data: {
            'password': password,
            'nick': nick
        }
    })
    .done(function(data) {
        console.log(data);
        callback(data);
    });
}
