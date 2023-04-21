const categoryService = require('../services/category')

module.exports = {

    async find(req, res, next) {

        try {

            const result = await categoryService.find()
            res.send(result)

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async findOne(req, res, next) {


        try {

            if (req.params && req.params.categoryId) {

                const result = await categoryService.findOne(req.params.categoryId)
                res.send(result)

            } else {

                res.status(400).send('category Id is required')

            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async update(req, res, next) {


        try {

            if (req.params && req.params.categoryId) {

                const result = await categoryService.update(req.params.categoryId, req.body)
                res.send(result)

            } else {
                res.status(400).send('category Id is required')
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async delete(req, res, next) {

        try {
            if (req.params && req.params.categoryId) {
                const result = await categoryService.delete(req.params.categoryId)
                res.send(result)
            } else {
                res.status(400).send("category Id is required")
            }
        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async create(req, res, next) {
        try {

            if (req.body) {


                const result = await categoryService.create(req.body)
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
