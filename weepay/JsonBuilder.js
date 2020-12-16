class JsonBuilder {
    #json

    constructor(json) {
        this.#json = json;
    }

    static jsonEncode(jsonObject) {
        return JSON.stringify(jsonObject);
    }

}

module.exports = JsonBuilder;