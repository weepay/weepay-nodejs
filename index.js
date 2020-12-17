const { GetPayment, FormInitialize, CreatePayment, CreatePaymentThreeD } = require("./weepay/Models");
const { Auth, GetPaymentRequest, FormInitializeRequest, CreatePaymentRequest, CreatePaymentRequestThreeD } = require("./weepay/Request");

class weepay {

    auth

    static configure(auth) {
        const options = new Auth(auth);
        return this.auth = options;
    }

    static async getPayment(request) {
        const getPaymentRequest = new GetPaymentRequest(request);

        const getPaymentInit = new GetPayment(getPaymentRequest, this.auth);

        const result = await getPaymentInit.getRawResult();

        return result;

    }

    static async formInitialize(request) {
        const formInitializeRequest = new FormInitializeRequest(request.data, request.customer, request.shippingAddress, request.billingAddress, request.products);

        const formInitialize = new FormInitialize(formInitializeRequest, this.auth);

        const result = await formInitialize.getRawResult();

        return result;

    }

    static async createPayment(request) {
        const createPaymentRequest = new CreatePaymentRequest(request.data, request.customer, request.shippingAddress, request.billingAddress, request.products);

        const createPayment = new CreatePayment(createPaymentRequest, this.auth);

        const result = await createPayment.getRawResult();

        return result;

    }

    static async createPayment3d(request) {
        const createPaymentRequest3d = new CreatePaymentRequestThreeD(request.data, request.customer, request.shippingAddress, request.billingAddress, request.products);

        const createPayment3d = new CreatePaymentThreeD(createPaymentRequest3d, this.auth);

        const result = await createPayment3d.getRawResult();

        return result;

    }

}

module.exports = weepay;