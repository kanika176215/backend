const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment')

//POST
router.post('/comment', (req, res, next) => {  
    
    commentController.create(req, res, next)
});

//GET
router.get('/comment', (req, res, next) => {
    commentController.find(req, res, next)
});


//GET
router.get('/comment/:commentId', (req, res, next) => {
    commentController.findOne(req, res, next)
});

//PUT
router.put('/comment/:commentId', (req, res, next) => {
    commentController.update(req, res, next)
});

//DELETE
router.delete('/comment/:commentId', (req, res, next) => {
    commentController.delete(req, res, next)
});

module.exports = router