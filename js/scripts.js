var apiLarge = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633712096580&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o";

var apiSmall = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633712096580&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";

$(document).ready(function(){
  
  if ( $(window).width() < 800) {
    $.getJSON(apiSmall,function(json){
      $.each(json.photoset.photo,function(i,myresult){
        $("body").css("background-image", "url(" + myresult.url_n + ")");
      });
    });
  }
  else {
    $.getJSON(apiLarge,function(json){
      $.each(json.photoset.photo,function(i,myresult){
        $("body").css("background-image", "url(" + myresult.url_o + ")");
      });
    });
  }
  
});