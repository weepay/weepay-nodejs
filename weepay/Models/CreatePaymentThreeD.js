const HttpRequest = require("../HttpRequest");
const { CreatePaymentRequestThreeD, Auth } = require("../Request");
const CreatePaymentThreeDResource = require("./CreatePaymentThreedResource");

class CreatePaymentThreeD extends HttpRequest {


    async responseHandler(option, request) {
        let err = {};
        var result = "";

        try {
            var response = await super.sendHttp(`${option.baseURL}/Payment/PaymentRequestThreeD`, request.toJsonString(option));
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
        if (option instanceof Auth && request instanceof CreatePaymentRequestThreeD) {

            const response = new CreatePaymentThreeDResource(this.responseHandler(option, request));

            return response;

        }
    }


}

module.exports = CreatePaymentThreeD;