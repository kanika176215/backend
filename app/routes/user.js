const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const auth = require('./../middlewares/auth')

//POST
router.post('/user/register', (req, res, next) => {  
    userController.create(req, res, next)
});

//POST
router.post('/user/login', (req, res, next) => {  
    userController.login(req, res, next)
});

//GET
router.get('/user/me', auth,  (req, res, next) => {
    userController.findOne(req, res, next)
});

//PUT
router.put('/user/:userId', (req, res, next) => {
    userController.update(req, res, next)
});

//DELETE
router.delete('/user/:userId', (req, res, next) => {
    userController.delete(req, res, next)
});

module.exports = router