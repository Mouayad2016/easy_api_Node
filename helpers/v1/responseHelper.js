// ?  HTTP  response helpers method could be declared here


module.exports = httpResponseHelper = {

    success(res, data) {
        return res.status(200).send(data)
    },
    notFound(res, message) {
        return res.status(404).send(message)
    },
    exist(res, message) {
        return res.status(409).send(message)
    },
    internalError(res, message) {
        return res.status(500).send(message)
    },
    badRequest(res, message) {
        return res.status(400).send(message)
    }

}