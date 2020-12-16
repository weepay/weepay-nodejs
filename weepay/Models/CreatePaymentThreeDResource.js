const ResourceHandler = require("../Helpers/ResourceHandler");
const BaseResource = require("./BaseResource");

class CreatePaymentThreeDResource extends BaseResource {

    constructor(response) {
        super();
        this.response = response;
    }

    getThreeDSecureUrl() {
        return ResourceHandler.getResponse(this.response, "threeDSecureUrl");
    }
}

module.exports = CreatePaymentThreeDResource;