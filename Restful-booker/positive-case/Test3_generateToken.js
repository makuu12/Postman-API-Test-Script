const responseData = pm.response.json();

pm.test("Should not be unauthorized", function () {
    pm.expect(pm.response.code).to.not.be.oneOf([401, 403]);
});

pm.test("API Key Authentication is successful", function () {
    pm.response.to.have.status(200);
    
    pm.expect(responseData).to.be.an("object");
});

pm.test("Should not be unauthorized", function () {
    pm.expect(pm.response.code).to.not.be.oneOf([401, 403]);
});

