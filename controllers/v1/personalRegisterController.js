const personalRegisterDb = require('../../db'); // ? Db map.
const Person = require('../../models/v1/person'); // ? Personal class. 
const ClientRequestValidation = require('../../models/exceptionModels/validationErros');
const httpResponseHelper = require('../../helpers/v1/responseHelper'); // ? HTTP response helper
const validation = require('../../validators/v1/validation')
module.exports = personalReigsterController = {
    async add(req, res) {
        try {
            // * Check if email exist. 
            if (personalRegisterDb.get(req.body.email)) {
                return httpResponseHelper.exist(res, "Email exist.");
            }
            const valid = validation.isEmailValid(req.body.email);
            if (!valid) {
                return httpResponseHelper.badRequest(res, "Please add a valid email ex: example@example.com.");
            }
            const person = new Person(); // * Class declaration.
            person.setPerson(req.body.email, req.body.fName, req.body.lName)
            personalRegisterDb.set(person.email, person) // * Add object to my map.
            return httpResponseHelper.success(res, "Success")
        } catch (error) {

            // ? ClientRequestValidation checks for email,first name and last name.
            if (error instanceof ClientRequestValidation) {
                return httpResponseHelper.badRequest(res, error)
            } else {
                console.log(error)
                return httpResponseHelper.internalError(res, "Internal server error.")
            }
        }
    },
    async deleteByEmail(req, res) {
        try {
            // * Check if email exist if so delet.
            if (personalRegisterDb.get(req.body.email)) {
                personalRegisterDb.delete(req.body.email)
                return httpResponseHelper.success(res, "Success.")
            }
            return httpResponseHelper.notFound(res, "No match in local DB.")
        } catch (error) {
            return httpResponseHelper.internalError(res, "Internal server error.")
        }
    },
    async getAll(req, res) {
        try {
            // * Response list
            response = [];
            // * Loop throw DB map and convert map values to JSON
            personalRegisterDb.forEach((value, key, map) => {
                // * Add values to my Response list
                response.push(value.toJSON())
            })
            return httpResponseHelper.success(res, response)
        } catch (error) {
            return httpResponseHelper.internalError(res, "Internal server error.")
        }

    }
}