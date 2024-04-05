// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
        "products": [
            {
                "id": 5,
                "quantity": 1
            }
        ]
}

test('Status code should be 200', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});

test('Response body should contain...', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["Everything You Need"]["Fruit Power Juice - Litchi"]).toBe(false);
	expect(actualResponseBody["Food City"]["Fruit Power Juice - Litchi"]).toBe(true);
	expect(actualResponseBody["Big World"]["Fruit Power Juice - Litchi"]).toBe(false);
	expect(actualResponseBody["Fresh Food"]["Fruit Power Juice - Litchi"]).toBe(true);
});