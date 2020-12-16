const HttpRequest = require("../HttpRequest");
const { Auth, GetPaymentRequest } = require("../Request");
const GetPaymentResource = require("./GetPaymentResource");

class GetPayment extends HttpRequest {

    async responseHandler(option, request) {
        let err = {};
        var result = "";

        try {
            var response = await super.sendHttp(`${option.baseURL}/GetPayment/Detail`, request.toJsonString(option));
            result = response.data;
        } catch (error) {
            err = error.response.data;
        }

        let errorLength = Object.keys(err).length;

        if (errorLength > 0) {
            return err;
        }
        return result;

    }

    constructor(request, option) {
        super();

        if (option instanceof Auth && request instanceof GetPaymentRequest) {

            const response = new GetPaymentResource(this.responseHandler(option, request));

            return response;

        }
    }

}

module.exports = GetPayment;