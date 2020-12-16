const BaseRequest = require("./BaseRequest");

class CreatePaymentRequest extends BaseRequest {
    orderId
    ipAddress
    price
    currency
    locale
    installmentNumber
    cardHolderName
    cardNumber
    epireMonth
    expireYear
    cvcNumber
    description
    paymentGroup
    paymentSource
    paymentChannel
    preAuth
    cardUserKey
    customer
    shippingAddress
    billingAddress
    products


    getJsonObject(options) {
        let arr = this;
        const { Products, customer, shippingAddress, billingAddress, ...dataObject } = { ...arr };

        const requestObject = {
            Auth: {
                bayiId: options.bayiId,
                apiKey: options.apiKey,
                secretKey: options.secretKey,
            },
            Data: dataObject,
            Customer: { ...this.customer },
            ShippingAddress: { ...this.shippingAddress },
            BillingAddress: { ...this.billingAddress },
            Products: this.Products,
        }
        return requestObject;
    }

}
module.exports = CreatePaymentRequest;