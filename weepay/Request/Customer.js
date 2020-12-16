const BaseRequest = require("./BaseRequest");

class Customer extends BaseRequest {
    #customerId
    #customerName
    #customerSurname
    #gsmNumber
    #email
    #identityNumber
    #city
    #country


    getJsonObject() {
        const requestObject = { ...this };
        return requestObject;
    }

}
module.exports = Customer;