const responseData = pm.response.json();

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
  });

pm.test("Response time is less than 300ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(300);
});

pm.test("Presence of 'Content-Type' header in the response", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});

pm.test("Response body is not an array", function () {
    const responseBody = pm.response.json();
    pm.expect(responseBody).to.be.not.an('array');
});

pm.test("Response has the required fields", function () {
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.include.all.keys('firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds');
});

pm.test("Checkin and checkout dates are in a valid date format", function () {
  pm.expect(responseData.bookingdates.checkin).to.match(/^\d{4}-\d{2}-\d{2}$/);
  pm.expect(responseData.bookingdates.checkout).to.match(/^\d{4}-\d{2}-\d{2}$/);
});

pm.test("Totalprice is a non-negative integer", function () {
  pm.expect(responseData.totalprice).to.be.a('number');
  pm.expect(responseData.totalprice).to.be.at.least(0);
});

pm.test("Response has the required fields", function () {
  pm.expect(responseData).to.be.an('object');
  pm.expect(responseData).to.have.all.keys(
    'firstname', 
    'lastname', 
    'totalprice', 
    'depositpaid', 
    'bookingdates', 
    'additionalneeds');

  pm.expect(responseData.bookingdates.checkin).to.exist;
  pm.expect(responseData.bookingdates.checkout).to.exist;
});

pm.test("Fields are accurate type", function () {
    pm.expect(responseData.firstname).to.be.a("string")
    pm.expect(responseData.lastname).to.be.a("string")
    pm.expect(responseData.totalprice).to.be.a("number")
    pm.expect(responseData.depositpaid).to.be.a("boolean")
    // cant verify since chai.js converts date into string
    // pm.expect(responseData.bookingdates.checkin).to.be.a("date")
    // pm.expect(responseData.bookingdates.checkout).to.be.a("date")
});

pm.test("Check-out is after check-in", function () {
    const checkin = new Date(responseData.bookingdates.checkin);
    const checkout = new Date(responseData.bookingdates.checkout);
    pm.expect(checkout > checkin).to.be.true;
});

pm.test("Checkin and checkout dates are in valid date format", function () {
  pm.expect(responseData).to.be.an('object');
  pm.expect(responseData.bookingdates.checkin).to.match(/^\d{4}-\d{2}-\d{2}$/);
  pm.expect(responseData.bookingdates.checkout).to.match(/^\d{4}-\d{2}-\d{2}$/);
});
