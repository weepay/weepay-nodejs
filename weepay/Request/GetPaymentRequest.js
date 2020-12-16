const BaseRequest = require("./BaseRequest")

class getPaymentRequest extends BaseRequest {

    #orderId
    #paymentId
    #locale

    getJsonObject(options) {

        const requestObject = {
            Auth: {
                bayiId: options.bayiId,
                apiKey: options.apiKey,
                secretKey: options.secretKey,
            },
            Data: { ...this },
        }
        return requestObject;
    }

}
module.exports = getPaymentRequest;