const Cache = require('timed-cache');
const http = require('http');
var cache = new Cache({ defaultTtl: 120 * 1000 });

exports.getMultiPhoto = function(req, resp) {
	return new Promise((resolve, reject) => {
		var photos = cache.get(photos);

		if(photos != undefined && photos != null) {
			resp.end(JSON.stringify(photos));
			return resolve("OK");
		} else {
			http.get('http://jsonplaceholder.typicode.com/photos', function(res) {
				//console.log('STATUS: ' + res.statusCode);
				//console.log('HEADERS: ' + JSON.stringify(res.headers));

				res.setEncoding('utf8');
				let rawData = '';
				res.on('data', (chunk) => { rawData += chunk; });
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						cache.put('photos', parsedData)
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

exports.getPhoto = function(req, resp) {
	return new Promise((resolve, reject) => {
		var albumId = req.query.albumId
	    var photo = cache.get("photo" + albumId);

		resp.writeHead(200, {"Content-Type": "application/json"});

		if(photo != undefined && photo != null) {
			resp.end(JSON.stringify(photo));
			return resolve("OK");
		} else {
			http.get('http://jsonplaceholder.typicode.com/photos?albumId=' + albumId, function(res) {
				//console.log('STATUS: ' + res.statusCode);
				//console.log('HEADERS: ' + JSON.stringify(res.headers));

				res.setEncoding('utf8');
				let rawData = '';
				res.on('data', (chunk) => { rawData += chunk; });
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						cache.put('photo' + albumId, parsedData)
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
