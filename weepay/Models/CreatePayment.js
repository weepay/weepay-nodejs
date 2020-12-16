const HttpRequest = require("../HttpRequest");
const { Auth, CreatePaymentRequest } = require("../Request");
const CreatePaymentResource = require("./CreatePaymentResource");

class CreatePayment extends HttpRequest {

    async responseHandler(option, request) {
        let err = {};
        var result = "";

        try {
            var response = await super.sendHttp(`${option.baseURL}/Payment/PaymentRequest`, request.toJsonString(option));
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

        if (option instanceof Auth && request instanceof CreatePaymentRequest) {

            const response = new CreatePaymentResource(this.responseHandler(option, request));

            return response;

        }
    }

}

module.exports = CreatePayment;