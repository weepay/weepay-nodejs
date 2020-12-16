const JsonBuilder = require("../JsonBuilder");

class BaseModel {
    toJsonString(options) {
        return JsonBuilder.jsonEncode(this.getJsonObject(options))
    }
}

module.exports = BaseModel;