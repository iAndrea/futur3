const httpMocks = require('node-mocks-http');
const site = require('./../albums');

const allalbums = 'http://futur3test.herokuapp.com/multiGallery'
const singleAlbum = 'http://futur3test.herokuapp.com/gallery?id=1'

describe('Test eseguiti su ALBUM', () => {

    test('Riesco a recuperare tutti gli album presenti?', () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: allalbums
        });

        const response = httpMocks.createResponse();

        return expect(site.getMultiGallery(request, response)).resolves.toBe('OK');
    });
});
