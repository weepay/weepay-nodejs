
const BaseRequest = require('./BaseRequest');

class FormInitializeRequest extends BaseRequest {

    constructor() {
        super();
    }

    orderId
    ipAddress
    paidPrice
    currency
    locale
    installmentNumber
    description
    paymentGroup
    paymentSource
    paymentChannel
    preAuth
    cardUserKey
    callBackUrl
    customer
    shippingAddress
    billingAddress
    Products



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
            Products: this.Products,
            Customer: { ...this.customer },
            ShippingAddress: { ...this.shippingAddress },
            BillingAddress: { ...this.billingAddress },
        }
        return requestObject;
    }
}



module.exports = FormInitializeRequest;