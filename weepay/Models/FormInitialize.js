const HttpRequest = require("../HttpRequest");
const Auth = require("../Request/Auth");
const FormInitializeRequest = require("../Request/FormInitializeRequest");
const FormResource = require("./FormResource");


class FormInitialize extends HttpRequest {

    async responseHandler(option, request) {
        let err = {};
        try {
            var response = await super.sendHttp(`${option.baseURL}/Payment/PaymentCreate`, request.toJsonString(option));
        } catch (error) {
            err = error.response.data;
        }

        let errorLength = Object.keys(err).length;

        if (errorLength > 0) {
            return err;
        }

        return response.data;

    }

    constructor(request, option) {
        super();

        if (option instanceof Auth && request instanceof FormInitializeRequest) {

            const response = new FormResource(this.responseHandler(option, request));

            return response;

        }
    }
}


module.exports = FormInitialize;