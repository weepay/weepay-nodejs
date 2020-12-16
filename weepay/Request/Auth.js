const BaseRequest = require("./BaseRequest");

class Auth extends BaseRequest {

    bayiId
    apiKey
    secretKey
    baseURL = "https://api.weepay.co"
    testBaseURL = "https://test-api.weepay.co"

}

module.exports = Auth;