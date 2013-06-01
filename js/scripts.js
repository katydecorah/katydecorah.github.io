var apiurl = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633712096580&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o";
$(document).ready(function(){
    $.getJSON(apiurl,function(json){
      $.each(json.photoset.photo,function(i,myresult){
        $("body").css("background-image", "url(" + myresult.url_o + ")");
      });
    });
});