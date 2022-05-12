const app = require('express');
const router =  app.Router();
const {register,
        login,
        registerValidations,
        LoginValidations
    } = require('../controllers/userController');

router.post("/register",registerValidations,register);
router.post("/login",LoginValidations,login); 

module.exports = router;