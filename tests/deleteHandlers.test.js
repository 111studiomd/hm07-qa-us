// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code should return 200 OK code', async () => {
     let statusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	statusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});


test('Status body should be true', async () => {
     let statusBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	statusBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(statusBody["ok"]).toBe(true);
});