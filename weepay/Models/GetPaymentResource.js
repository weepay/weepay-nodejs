const ResourceHandler = require("../Helpers/ResourceHandler");
const BaseResource = require("./BaseResource");


class GetPaymentResource extends BaseResource {
    constructor(response) {
        super();
        this.response = response;
    }

    getPaymentStatus() {
        return ResourceHandler.getResponse(this.response, "paymentStatus");
    }

    getPaymentId() {
        return ResourceHandler.getResponse(this.response, "paymentId");
    }

    getOrderId() {
        return ResourceHandler.getResponse(this.response, "orderId");
    }

    getPrice() {
        return ResourceHandler.getResponse(this.response, "price");
    }

    getCurrency() {
        return ResourceHandler.getResponse(this.response, "currency");
    }

    getPaymentType() {
        return ResourceHandler.getResponse(this.response, "paymentType");
    }

    getTransactionStatus() {
        return ResourceHandler.getResponse(this.response, "transactionStatus");
    }

    getInstallement() {
        return ResourceHandler.getResponse(this.response, "installement");
    }

    getPreAuth() {
        return ResourceHandler.getResponse(this.response, "preAuth");
    }

    getPreAuthAmount() {
        return ResourceHandler.getResponse(this.response, "preAuthAmount");
    }

    getExchangeCurrency() {
        return ResourceHandler.getResponse(this.response, "exchangeCurrency");
    }

    getExchangeRate() {
        return ResourceHandler.getResponse(this.response, "exchangeRate");
    }

    getRefundAmount() {
        return ResourceHandler.getResponse(this.response, "refundAmount");
    }

    getCreditCardBin() {
        return ResourceHandler.getResponse(this.response, "creditCardBin");
    }

    getCardAssociation() {
        return ResourceHandler.getResponse(this.response, "cardAssociation");
    }

    getCardFamily() {
        return ResourceHandler.getResponse(this.response, "cardFamily");
    }

    getFraudStatus() {
        return ResourceHandler.getResponse(this.response, "fraudStatus");
    }

    getComission() {
        return ResourceHandler.getResponse(this.response, "comission");
    }

    getPaymentDate() {
        return ResourceHandler.getResponse(this.response, "paymentDate");
    }


}

module.exports = GetPaymentResource;