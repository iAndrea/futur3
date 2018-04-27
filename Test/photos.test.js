const httpMocks = require('node-mocks-http');
const site = require('./../photos');

const singlePhoto = 'http://futur3test.herokuapp.com/photo?id=1'

describe('Test eseguiti su PHOTO', () => {

    test('Riesco a recuperare una foto specifica?', () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url: singlePhoto
        });

        const response = httpMocks.createResponse();

        return expect(site.getPhoto(request, response)).resolves.toBe('OK');
    });
});
