const BaseRequest = require("./BaseRequest");

class CreatePaymentRequestThreeD extends BaseRequest {
    data
    customer
    shippingAddress
    billingAddress
    products

    constructor(data, customer, shippingAddress, billingAddress, products) {
        super();
        this.data = data;
        this.customer = customer;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
        this.products = products;
    }

    getJsonObject(options) {
        const requestObject = {
            Auth: options.auth,
            Data: this.data,
            Products: this.products,
            Customer: this.customer,
            ShippingAddress: this.shippingAddress,
            BillingAddress: this.billingAddress,
        }
        return requestObject;
    }

}
module.exports = CreatePaymentRequestThreeD;
