// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code: expect 200', async () => {
    let responseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(responseCode).toBe(200);
});

test('Response body should contain...', async () => {
    let responseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(responseBody[0].name).toBe("Everything You Need");
});