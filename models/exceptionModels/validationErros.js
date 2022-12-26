class ClientRequestValidation extends Error {
    constructor(message) {
        super(message);
        this.error = message;
    }
}

module.exports = ClientRequestValidation;