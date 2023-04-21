const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category')

//POST
router.post('/category', (req, res, next) => {  
    
    categoryController.create(req, res, next)
});

//GET
router.get('/category', (req, res, next) => {
    categoryController.find(req, res, next)
});


//GET
router.get('/category/:categoryId', (req, res, next) => {
    categoryController.findOne(req, res, next)
});

//PUT
router.put('/category/:categoryId', (req, res, next) => {
    categoryController.update(req, res, next)
});

//DELETE
router.delete('/category/:categoryId', (req, res, next) => {
    categoryController.delete(req, res, next)
});

module.exports = router