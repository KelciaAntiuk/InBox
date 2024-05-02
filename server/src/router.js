const express = require('express');

const userController = require('./controllers/userController')
const emailController = require('./controllers/emailController')

const router = express.Router();



router.post('/user', userController.createUser);
router.get('/user', userController.getAll);

router.post('/email', emailController.createEmail);
router.get('/email', emailController.getAll);

module.exports = router;
