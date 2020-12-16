const ResourceHandler = require("../Helpers/ResourceHandler");
const BaseResource = require("./BaseResource");


class FormResource extends BaseResource {
    constructor(response) {
        super();
        this.response = response;
    }

    getCheckoutForm() {
        return ResourceHandler.getResponse(this.response, "CheckoutFormData");
    }

    getPaymentPageUrl() {
        return ResourceHandler.getResponse(this.response, "paymentPageUrl");
    }

    getTokenExpireTime() {
        return ResourceHandler.getResponse(this.response, "tokenExpireTime");
    }

    getToken() {
        return ResourceHandler.getResponse(this.response, "token");
    }

}

module.exports = FormResource;