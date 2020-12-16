const ResourceHandler = require("../Helpers/ResourceHandler");

class BaseResource {

    getStatus() {
        return ResourceHandler.getResponse(this.response, "status");
    }

    getErrorCode() {
        return ResourceHandler.getResponse(this.response, "errorCode");
    }

    getMessage() {
        return ResourceHandler.getResponse(this.response, "message");
    }

    getError() {
        return ResourceHandler.getResponse(this.response, "error");
    }

    getLocale() {
        return ResourceHandler.getResponse(this.response, "locale");
    }

    getSystemTime() {
        return ResourceHandler.getResponse(this.response, "systemTime");
    }

    getRawResult() {
        return ResourceHandler.getResponse(this.response);
    }
}

module.exports = BaseResource;