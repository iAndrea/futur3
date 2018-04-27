const Cache = require('timed-cache');
var cache = new Cache({ defaultTtl: 120 * 1000 });

exports.getMultiPhoto = function(req, resp) {
	var photos = cache.get(photos);

	if(photos != undefined && photos != null)
		resp.end(JSON.stringify(photos));
	else {
		$.get('https://jsonplaceholder.typicode.com/photos', function(photos) {
	        cache.put('photos', photos)

			resp.end(JSON.stringify(photos));
	    }
	}
}

exports.getPhoto = function(req, resp) {
	var PhotoId = req.query.id
    var photo = cache.get("photo" + PhotoId);

	resp.writeHead(200, {"Content-Type": "application/json"});

	if(photo != undefined && photo != null)
		resp.end(JSON.stringify(photo));
	else {
	    $.get('https://jsonplaceholder.typicode.com/photos?id=' + PhotoId, function(photo) {
	        cache.put('photo' + PhotoId, photo)

			resp.end(JSON.stringify(photo));
	    }
	}
}
