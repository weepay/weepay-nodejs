const weepay = require("../..");
const { Currency, Locale, PaymentGroup, PaymentChannel, ProductType } = require("../../weepay/Constants");

weepay.configure({
    bayiId: "bayi-id",
    apiKey: "apiKey",
    secretKey: "secretKey",
    baseUrl: "https://api.weepay.co"
});

const request = {
    data: {
        orderId: 1,
        ipAddress: "192.168.2.1",
        paidPrice: 0.10,
        currency: Currency.TL,
        locale: Locale.TR,
        description: "Açıklama Alanı",
        cardHolderName: "isim soyisim",
        cardNumber: "555555555555555",
        expireMonth: "01",
        expireYear: "22",
        cvcNumber: "233",
        callBackUrl: "https://websitem.com/callback",
        installmentNumber: 1,
        paymentGroup: PaymentGroup.PRODUCT,
        paymentChannel: PaymentChannel.WEB
    },
    customer: {
        customerId: 1234,
        customerName: "isim",
        customerSurname: "soyisim",
        gsmNumber: "50XXXXXX",
        email: "helo@weepay.co",
        identityNumber: "00032222721",
        city: "istanbul",
        country: "turkey"
    },
    billingAddress: {
        contactName: "isim soyisim",
        address: "Abdurrahman Nafiz Gürman,Mh, G. Ali Rıza Gürcan Cd. No:27",
        city: "istanbul",
        country: "turkey",
        zipCode: "34164"
    },
    shippingAddress: {
        contactName: "isim soyisim",
        address: "Abdurrahman Nafiz Gürman,Mh, G. Ali Rıza Gürcan Cd. No:27",
        city: "istanbul",
        country: "turkey",
        zipCode: "34164"
    },
    products: [
        {
            name: "first product",
            productPrice: "30.00",
            itemType: ProductType.PHYSICAL,
            productId: "1234"
        },
        {
            name: "first product",
            productPrice: "30.00",
            itemType: ProductType.PHYSICAL,
            productId: "1234"
        },
    ]
}

weepay.createPayment3d(request).then(function (res) {
    if (res.status == "success") {
        console.log(res.threeDSecureUrl);
    } else {
        console.log(res.message)
    }
});
