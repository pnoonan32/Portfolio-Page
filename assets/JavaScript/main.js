// To append Kyrie Irving Gif

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=uncle+drew+pepsi&api_key=dc6zaTOxFJmzC&limit=1");
xhr.done(function(response) {
    console.log("success got data", response);

var gifs = response.data

for ( i in gifs ) {
    $("#Giphy").append("<a href='https://github.com/pnoonan32/GiphyAPI' target='_blank'><img style='width:300px;height:300px;' class='GiphyImages text-center mx-auto' src='" +gifs[i].images.original.url+"'</a>")
}

});

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=sacramentokings&api_key=dc6zaTOxFJmzC&limit=1");
xhr.done(function(response) {
    console.log("success got data", response);

var sacramentoKingsLogo = response.data

for ( i in sacramentoKingsLogo) {
    $("#kingsLogo").prepend("<a href='https://www.nba.com/kings/' target='_blank'><img style='width:300px;height:300px;' id='kingsGif' class='GiphyImages text-center mx-auto' src='" +sacramentoKingsLogo[i].images.original.url+"'</a>")
}

});









