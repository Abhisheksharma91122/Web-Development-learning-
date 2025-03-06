const { signup } = require('../Controllers/AuthController');
const { loginValidation, signupValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation , )

router.post('/signup', signupValidation, signup)

module.exports = router