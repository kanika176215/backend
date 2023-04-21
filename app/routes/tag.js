const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag')

//POST
router.post('/tag', (req, res, next) => {  
    
    tagController.create(req, res, next)
});

//GET
router.get('/tag', (req, res, next) => {
    tagController.find(req, res, next)
});


//GET
router.get('/tag/:tagId', (req, res, next) => {
    tagController.findOne(req, res, next)
});

//PUT
router.put('/tag/:tagId', (req, res, next) => {
    tagController.update(req, res, next)
});

//DELETE
router.delete('/tag/:tagId', (req, res, next) => {
    tagController.delete(req, res, next)
});

module.exports = router