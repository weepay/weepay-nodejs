const { Locale, Currency, PaymentGroup, PaymentChannel, ProductType } = require("../../weepay/Constants");
const { FormInitializeRequest, Customer, Address, Products } = require("../../weepay/Request");
const { FormInitialize } = require("../../weepay/Models");
const options = require("../Options");

//Request
const request = new FormInitializeRequest();
request.orderId = "1";
request.ipAddress = "192.168.2.1";
request.paidPrice = 0.10;
request.currency = Currency.TL;
request.locale = Locale.TR;
request.description = "Açıklama Alanı";
request.callBackUrl = "https://websitem.com/callback";
request.paymentGroup = PaymentGroup.PRODUCT
request.paymentChannel = PaymentChannel.WEB


//Customer
const customer = new Customer();
customer.customerId = 1235
customer.customerName = "isim"
customer.customerSurname = "soyisim"
customer.gsmNumber = "50XXXXXX"
customer.email = "helo@weepay.co"
customer.identityNumber = "00032222721"
customer.city = "istanbul"
customer.country = "turkey"
request.customer = customer;

//Adresses
//Billing Address
const billingAddress = new Address();
billingAddress.contactName = "isim soyisim"
billingAddress.address = "Abdurrahman Nafiz Gürman,Mh, G. Ali Rıza Gürcan Cd. No:27"
billingAddress.city = "istanbul"
billingAddress.country = "turkey"
billingAddress.zipCode = "34164"
request.billingAddress = billingAddress;

//Shipping Address
const shippingAddress = new Address();
shippingAddress.contactName = "isim soyisim"
shippingAddress.address = "Abdurrahman Nafiz Gürman,Mh, G. Ali Rıza Gürcan Cd. No:27"
shippingAddress.city = "istanbul"
shippingAddress.country = "turkey"
shippingAddress.zipCode = "34164"
request.shippingAddress = shippingAddress;

//Order Products
const productArray = [];

//First Products
const firstProduct = new Products();
firstProduct.name = "first product";
firstProduct.productPrice = "30.00";
firstProduct.itemType = ProductType.PHYSICAL;
firstProduct.productId = "1234";

//Second Products
const secondProduct = new Products();
secondProduct.name = "second product";
secondProduct.productPrice = "10.00";
secondProduct.itemType = ProductType.VIRTUAL;
secondProduct.productId = "4321";

productArray.push(firstProduct, secondProduct);
request.Products = productArray;

const checkoutFormInitialize = new FormInitialize(request, options.Auth());


(async () => {
    const status = await checkoutFormInitialize.getStatus();

    if (status == "success") {
        const checkoutFormData = await checkoutFormInitialize.getCheckoutForm();
        // console.log(checkoutFormData);

    } else {
        console.log(await checkoutFormInitialize.getError());
        console.log(await checkoutFormInitialize.getErrorCode());
        console.log(await checkoutFormInitialize.getMessage());
    }
})();


