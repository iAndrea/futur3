'use strict';
module.exports = function(app) {
	const gl = require('./albums');
	const ph = require ('./photos');

	app.route('/multiGallery')
		.get(gl.getMultiGallery);

	app.route('/gallery')
		.get(gl.getGallery);

	app.route('/multiPhoto')
		.get(ph.getMultiPhoto);

	app.route('/photo')
		.get(ph.getPhoto);

	app.route('/cache')
		.delete(ph.delCache)
		.delete(gl.delCache)
};
