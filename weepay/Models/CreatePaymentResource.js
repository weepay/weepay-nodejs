const ResourceHandler = require("../Helpers/ResourceHandler");
const BaseResource = require("./BaseResource");

class CreatePaymentResource extends BaseResource {

    constructor(response) {
        super();
        this.response = response;
    }

    getSecretKey() {
        return ResourceHandler.getResponse(this.response, "secretKey");

    }
    getPaymentStatus() {
        return ResourceHandler.getResponse(this.response, "paymentStatus");

    }
    getPaymentId() {
        return ResourceHandler.getResponse(this.response, "paymentId");

    }

}
module.exports = CreatePaymentResource;
