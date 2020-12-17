# weepay node.js 
#### node.js credit card payment library


You can sign up or sign in for an weepay account at [https://weepay.co](https://weepay.co "https://weepay.co")
### Requirements
- Node.js v12.0.0 or later

### Installation

`$ npm i weepay-nodejs`

### Usage
To write an app using the SDK
- Add dependency '--- -sdk' in your package.json file. 
- Require 'weepay-nodejs' in your file

```javascript
const  weepay = require('weepay-nodejs');
```

- Create config options, with parameters (bayiId, apiKey, secretKey).

```javascript 
weepay.configure({
    bayiId: "bayi-id",
    apiKey: "apiKey",
    secretKey: "secretKey",
    baseUrl: "https://test-api.weepay.co"
});

```

- Invoke the rest api (eg: create a weepay payment) with required parameters (eg: data, option).
- All request functions are (async - await) function.

```javascript
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
weepay.createPayment(request).then(function (res) {
    if (res.status == "success") {
        console.log(res);
    } else {
        console.log(res.message)
    }
});
```

- You can see further examples in samples folder

###Samples

[PaymentFormCreateRequest ](https://github.com/weepay/weepay-nodejs/blob/main/samples/CreatePayment/CreatePaymentForm.js)

[PaymentRequest3Ds](https://github.com/weepay/weepay-nodejs/blob/main/samples/CreatePayment/CreatePaymentThreeD.js")

[PaymentRequest](https://github.com/weepay/weepay-nodejs/blob/main/samples/CreatePayment/CreatePayment.js")

[PaymetDetail](https://github.com/weepay/weepay-nodejs/blob/main/samples/GetPayment/PaymentDetail.js")


