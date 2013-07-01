var small = "url_n",
    medium = "url_z",
    large = "url_o",
    size = medium,
    which = 1;



if ( $(window).width() < 400) {size=small;}
else if ( $(window).width() > 800) {size=large;}
else {size=medium;}

function flickr() {
  var apiCall = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=" + size ;
  $.getJSON(apiCall,function(json){
    $.each(json.photoset.photo,function(i,item){
      var inSet = json.photoset.photo.length - which;
      if (i === inSet) {
        var image = item[size];
        $("body").css("background-image", "url(" + image + ")");
        $(".title").html("<a href='http://www.flickr.com/photos/91218249@N05/sets/72157633859537779/'> " + item.title + "</a>");
      }
      if (which === 1) {
        $(".next").hide();
      }
      if(which > 1) {
        $(".next").show();
      }
      if(which === json.photoset.photo.length){
        $(".prev").hide();
      }
      else {
        $(".prev").show();
      }
    });
  });
}

flickr();

$(".prev").click(function(){
  which = which + 1;
  flickr();
});

$(".next").click(function(){
  which = which - 1;
  flickr();
});