
const handler = require(`../src/functions/helloworld`)

describe(`When GET /helloWorld`, () => {
    test('should return the right greeting name', async () => {
        const event = { pathParameters: { name: "Cristina"} }
        const response = await handler.handler(event);
        response.body = JSON.parse(response.body);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBe("Hello Cristina")
    })
})