const Cache = require('timed-cache');
var cache = new Cache({ defaultTtl: 120 * 1000 });

exports.getMultiPhoto = function(req, resp) {
	var albums = cache.get(albums);

	if(albums != undefined && albums != null)
		resp.end(JSON.stringify(albums));
	else {
        $.get('https://jsonplaceholder.typicode.com/albums', function(albums) {
            cache.put('albums', albums)

            resp.end(JSON.stringify(albums));
        }
	}
}

exports.getPhoto = function(req, resp) {
	var GalleryId = req.query.id
    var album = cache.get("album" + GalleryId);

	resp.writeHead(200, {"Content-Type": "application/json"});

	if(album != undefined && album != null)
		resp.end(JSON.stringify(album));
	else {
        $.get('https://jsonplaceholder.typicode.com/albums?id=' + GalleryId, function(album) {
            cache.put('album' + GalleryId, album)

            resp.end(JSON.stringify(album));
        }
	}
}
