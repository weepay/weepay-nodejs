const axios = require("axios");

class HttpRequest {

    async sendHttp(urls, request) {
        const user = await axios.post(urls, request)
        return user;
    }

}

module.exports = HttpRequest;