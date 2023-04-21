const tagService = require('../services/tag')

module.exports = {

    async find(req, res, next) {

        try {

            const result = await tagService.find()
            res.send(result)

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async findOne(req, res, next) {


        try {

            if (req.params && req.params.tagId) {

                const result = await tagService.findOne(req.params.tagId)
                res.send(result)

            } else {

                res.status(400).send('tag Id is required')

            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async update(req, res, next) {


        try {

            if (req.params && req.params.tagId) {

                const result = await tagService.update(req.params.tagId, req.body)
                res.send(result)

            } else {
                res.status(400).send('tag Id is required')
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async delete(req, res, next) {

        try {
            if (req.params && req.params.tagId) {
                const result = await tagService.delete(req.params.tagId)
                res.send(result)
            } else {
                res.status(400).send("tag Id is required")
            }
        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async create(req, res, next) {


        try {


            if (req.body) {

                const result = await tagService.create(req.body)
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
