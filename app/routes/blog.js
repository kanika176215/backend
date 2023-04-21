const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog')
const auth = require('./../middlewares/auth')

//POST
router.post('/blog', (req, res, next) => {  
    
    blogController.create(req, res, next)
});

//GET
router.get('/blog', (req, res, next) => {
    blogController.find(req, res, next)
});


//GET
router.get('/blog/:blogId', (req, res, next) => {
    blogController.findOne(req, res, next)
});

//PUT
router.put('/blog/:blogId', auth, (req, res, next) => {
    blogController.update(req, res, next)
});

//DELETE
router.delete('/blog/:blogId', (req, res, next) => {
    blogController.delete(req, res, next)
});

module.exports = router