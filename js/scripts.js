var apiMedium = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_z";

$.getJSON(apiMedium,function(json){
	$.each(json.photoset.photo,function(i,myresult){
		$("body").css("background-image", "url(" + myresult.url_z + ")");
	});
});

function sniff() {

	if ( $(window).width() < 500) {
		var apiSmall = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";
		$.getJSON(apiSmall,function(json){
			$.each(json.photoset.photo,function(i,myresult){
				$("body").css("background-image", "url(" + myresult.url_n + ")");
			});
		});
	}


	else if ( $(window).width() < 800) {
		var apiMedium = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_z";

		$.getJSON(apiMedium,function(json){
			$.each(json.photoset.photo,function(i,myresult){
				$("body").css("background-image", "url(" + myresult.url_z + ")");
			});
		});
	}

	else {
		var apiLarge = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o";


		$.getJSON(apiLarge,function(json){
			$.each(json.photoset.photo,function(i,myresult){
				$(window).load(function() {
					$("body").css("background-image", "url(" + myresult.url_o + ")");

				});
			});
		});
	}
}
sniff();

$(window).resize(function() {
	sniff();
});
