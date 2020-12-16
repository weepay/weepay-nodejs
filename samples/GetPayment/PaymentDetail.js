const { Locale } = require("../../weepay/Constants");
const { GetPaymentRequest } = require("../../weepay/Request");
const { GetPayment } = require("../../weepay/Models");
const options = require("../Options");

//Request
const request = new GetPaymentRequest();
request.orderId = "1";
request.locale = Locale.TR;

const getPaymentInit = new GetPayment(request, options.Auth());

(async () => {
    const status = await getPaymentInit.getStatus();

    if (status == "success") {

        const paymentStatus = await getPaymentInit.getPaymentStatus();

        if (paymentStatus == "SUCCESS") {

            console.log("ÖDEME BAŞARILI");

        } else if (paymentStatus == "FAILURE") {

            console.log("Ödeme Başarısız");

        }
    } else {
        console.log(await getPaymentInit.getError());
        console.log(await getPaymentInit.getErrorCode());
        console.log(await getPaymentInit.getMessage());
    }
})();
