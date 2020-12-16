const BaseRequest = require("./BaseRequest")


class Products extends BaseRequest {
    name
    productPrice
    itemType
    productId

    getJsonObject() {
        const requestObject = { ...this };
        return requestObject;
    }

}
module.exports = Products;