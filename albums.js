const Cache = require('timed-cache');
const http = require('http');
var cache = new Cache({ defaultTtl: 120 * 1000 });

exports.getMultiGallery = function(req, resp) {
	return new Promise((resolve, reject) => {
		var albums = cache.get(albums);

		if(albums != undefined && albums != null) {
			resp.end(JSON.stringify(albums));
			return resolve("OK");
		} else {
			http.get('http://jsonplaceholder.typicode.com/albums', function(res) {
				//console.log('STATUS: ' + res.statusCode);
				//console.log('HEADERS: ' + JSON.stringify(res.headers));

				res.setEncoding('utf8');
				let rawData = '';
				res.on('data', (chunk) => { rawData += chunk; });
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						cache.put('albums', parsedData)
						//console.log(parsedData);
						resp.end(rawData);
						return resolve("OK");
					} catch (e) {
						console.error(e.message);
						return reject(e.message);
					}
				});
			}).on('error', (e) => {
				console.error(`Got error: ${e.message}`);
				return reject(e.message);
			});
		}
	});
}

exports.getGallery = function(req, resp) {
	return new Promise((resolve, reject) => {
		var GalleryId = req.query.id
	    var album = cache.get("album" + GalleryId);

		resp.writeHead(200, {"Content-Type": "application/json"});

		if(album != undefined && album != null) {
			resp.end(JSON.stringify(album));
			return resolve("OK");
		} else {
			http.get('http://jsonplaceholder.typicode.com/albums?id=' + GalleryId, function(res) {
				//console.log('STATUS: ' + res.statusCode);
				//console.log('HEADERS: ' + JSON.stringify(res.headers));

				res.setEncoding('utf8');
				let rawData = '';
				res.on('data', (chunk) => { rawData += chunk; });
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						cache.put('album' + GalleryId, parsedData)
						//console.log(parsedData);
						resp.end(rawData);
						return resolve("OK");
					} catch (e) {
						console.error(e.message);
						return reject(e.message);
					}
				});
			}).on('error', (e) => {
				console.error(`Got error: ${e.message}`);
				return reject(e.message);
			});
		}
	});
}

exports.delCache = function(req, resp) {
	resp.writeHead(200, {"Content-Type": "application/json"});

	cache = new Cache();
	resp.end(JSON.stringify("OK"));
}
