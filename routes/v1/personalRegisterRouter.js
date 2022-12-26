const router = require('express').Router();
const authToken = require('../../jwt/jwtToken')
const personalRegisterController = require('../../controllers/v1/personalRegisterController')



router.get('/', authToken, personalRegisterController.getAll)
router.post('/', authToken, personalRegisterController.add)
router.delete('/', authToken, personalRegisterController.deleteByEmail)

module.exports = router;