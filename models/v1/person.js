const ClientRequestValidation = require('../exceptionModels/validationErros')

class Person {



    constructor(email, fName, lName) {
        this.email = email;
        this.fName = fName;
        this.lName = lName;
    }

    setPerson(email, fName, lName) {
        const requierdAttributesNames = ['email', 'fName', 'lName']
        const requierdAttributes = [email, fName, lName]
        for (var i in requierdAttributes) {
            if (!requierdAttributes[i]) {
                throw new ClientRequestValidation(`${requierdAttributesNames[i]} Can't be Null.`)
            }
        }
        this.email = email,
            this.fName = fName,
            this.lName = lName
    }

    toJSON() {
        return {
            email: this.email,
            fName: this.fName,
            lName: this.lName
        };
    }
};

module.exports = Person;