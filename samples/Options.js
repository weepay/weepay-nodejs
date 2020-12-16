const Auth = require("../weepay/Request/Auth");

class Options {

    static Auth() {
        const options = new Auth();
        options.bayiId = "bayi-id";
        options.apiKey = "apiKey";
        options.secretKey = "secretKey";
        return options;
    }
}
module.exports = Options;