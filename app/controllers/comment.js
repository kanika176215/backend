const commentService = require('../services/comment')

module.exports = {

    async find(req, res, next) {

        try {

            const result = await commentService.find()
            res.send(result)

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async findOne(req, res, next) {


        try {

            if (req.params && req.params.commentId) {

                const result = await commentService.findOne(req.params.commentId)
                res.send(result)

            } else {

                res.status(400).send('comment Id is required')

            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async update(req, res, next) {


        try {

            if (req.params && req.params.commentId) {

                const result = await commentService.update(req.params.commentId, req.body)
                res.send(result)

            } else {
                res.status(400).send('comment Id is required')
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async delete(req, res, next) {

        try {
            if (req.params && req.params.commentId) {
                const result = await commentService.delete(req.params.commentId)
                res.send(result)
            } else {
                res.status(400).send("comment Id is required")
            }
        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async create(req, res, next) {


        try {


            if (req.body) {


                const result = await commentService.create(req.body)
                res.send(result)


            } else {
                res.status(400).send("Data is required")
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    }

}
