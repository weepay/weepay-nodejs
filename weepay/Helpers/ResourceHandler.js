class ResourceHandler {

    static async getResponse(response, suffix) {
        let err = {};
        let data = "";

        try {
            const request = await response;
            data = request;
        } catch (error) {
            err = error;
        }

        let errorLength = Object.keys(err).length;

        if (errorLength > 0) {
            return err;
        }

        return suffix ? data[suffix] : data;

    }
}

module.exports = ResourceHandler;