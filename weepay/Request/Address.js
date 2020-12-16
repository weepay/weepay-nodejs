const BaseRequest = require("./BaseRequest");

class Address extends BaseRequest {
    #contactName
    #address
    #city
    #country
    #district
    #zipCode

    getJsonObject() {
        const requestObject = { ...this };
        return requestObject;
    }


}
module.exports = Address;