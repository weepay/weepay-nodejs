const BaseRequest = require("./BaseRequest")

class getPaymentRequest extends BaseRequest {

    request

    constructor(request) {
        super();
        this.request = request;
    }

    getJsonObject(options) {
        const requestObject = {
            Auth: options.auth,
            Data: this.request,
        }
        return requestObject;
    }

}
module.exports = getPaymentRequest;