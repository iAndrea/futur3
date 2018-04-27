'use strict';
module.exports = function(app) {
	const gl = require('../controllers/albums');
	const ph = require ('../controllers/photos');

	app.route('/multiGallery')
		.get(gl.getMultiGallery);

	app.route('/gallery')
		.get(gl.getGallery);

	app.route('/multiPhoto')
		.get(ph.getMultiPhoto);

	app.route('/photo')
		.get(ph.getPhoto);
};
