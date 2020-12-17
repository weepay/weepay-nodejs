const weepay = require("../..");
const { Locale } = require("../../weepay/Constants");

weepay.configure({
    bayiId: "bayi-id",
    apiKey: "apiKey",
    secretKey: "secretKey",
    baseUrl: "https://api.weepay.co"
});

const request = {
    orderId: 1, // or paymentId
    locale: Locale.TR,
}


weepay.getPayment(request).then(function (res) {
    if (res.status == "success") {
        console.log(res.data);
    } else {
        console.log(res.message)
    }
});
