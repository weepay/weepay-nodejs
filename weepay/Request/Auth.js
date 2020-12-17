const BaseRequest = require("./BaseRequest");

class Auth extends BaseRequest {

    auth
    baseURL = "https://api.weepay.co"
    testBaseURL = "https://test-api.weepay.co"

    constructor(auth) {
        super();
        this.auth = auth;
    }

}

module.exports = Auth;