const { Currency, Locale, PaymentGroup, PaymentChannel, ProductType } = require("../../weepay/Constants");
const { CreatePaymentThreeD } = require("../../weepay/Models");
const { CreatePaymentRequestThreeD, Customer, Address, Products } = require("../../weepay/Request");
const options = require("../Options");

//Request 
const request = new CreatePaymentRequestThreeD();
request.orderId = "1";
request.ipAddress = "192.168.2.1";
request.paidPrice = 10.50;
request.currency = Currency.TL;
request.locale = Locale.TR;
request.description = "Açıklama Alanı";
request.cardHolderName = "isim soyisim";
request.cardNumber = "555555555555555";
request.expireMonth = "01";
request.expireYear = "22";
request.cvcNumber = "233";
request.callBackUrl = "https://websitem.com/callback"
request.installmentNumber = 1;
request.paymentGroup = PaymentGroup.PRODUCT;
request.paymentChannel = PaymentChannel.WEB;

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

const createPaymentRequest3d = new CreatePaymentThreeD(request, options.Auth());

(async () => {
    const status = await createPaymentRequest3d.getStatus();
    if (status == "success") {

        const threeDSecureUrl = await createPaymentRequest3d.getThreeDSecureUrl();
        console.log(threeDSecureUrl)

    } else {
        console.log(await createPaymentRequest3d.getError());
        console.log(await createPaymentRequest3d.getErrorCode());
        console.log(await createPaymentRequest3d.getMessage());
    }
})();