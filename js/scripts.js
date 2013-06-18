var apiSmall = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";

$.getJSON(apiSmall,function(json){
	$.each(json.photoset.photo,function(i,item){
		var inSet = json.photoset.photo.length - 1;
		if (i === inSet) {
			$("body").css("background-image", "url(" + item.url_n + ")");
			$(".title").html("<a href='http://www.flickr.com/photos/91218249@N05/sets/72157633859537779/'>" + item.title + "</a>");
		}
	});
});


//function sniff() {

	if ( $(window).width() < 500) {
		var apiSmall = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";

		$.getJSON(apiSmall,function(json){
			$.each(json.photoset.photo,function(i,item){
				var inSet = json.photoset.photo.length - 1;
				if (i === inSet) {
					$("body").css("background-image", "url(" + item.url_n + ")");
				}
			});
		});
	}


	else if ( $(window).width() < 800) {
		var apiMedium = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_z";

		$.getJSON(apiMedium,function(json){
			$.each(json.photoset.photo,function(i,item){
				var inSet = json.photoset.photo.length - 1;
				if (i === inSet) {
					$("body").css("background-image", "url(" + item.url_z + ")");
				}
			});
		});
	}

	else {


		var apiLarge = "http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633859537779&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o";

		$.getJSON(apiLarge,function(json){
			$("body").append("<div class='helper'></div>");
			$.each(json.photoset.photo,function(i,item){
				var inSet = json.photoset.photo.length - 1;
				if (i === inSet) {
					$(".helper").css("background-image", "url(" + item.url_o + ")");
					$(window).load(function() {
						$("body").css("background-image", "url(" + item.url_o + ")");
						$(".helper").remove();
					});
				}
			});
		});



	}
//}
//sniff();

//$(window).resize(function() {
//	sniff();
//});

