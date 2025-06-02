pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 300ms", function () {
    const ms = 300;
    pm.expect(pm.response.responseTime).to.be.below(ms);
});

pm.test("Presence of 'Content-Type' header in the response", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});

pm.test("Response body is an array", function () {
    const responseBody = pm.response.json();
    pm.expect(responseBody).to.be.an('array');
});

pm.test("Each object in the array has 'bookingid'", function () {
    const responseBody = pm.response.json();
    responseBody.forEach((booking) => {
        pm.expect(booking).to.have.property('bookingid');
    });
});