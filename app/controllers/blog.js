const blog = require('../models/blog')
const blogService = require('../services/blog')

module.exports = {

    async find(req, res, next) {

        try {

            const result = await blogService.find()
            res.send(result)

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async findOne(req, res, next) {


        try {

            if (req.params && req.params.blogId) {

                const result = await blogService.findOne(req.params.blogId)
                res.send(result)

            } else {

                res.status(400).send('Blog Id is required')

            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async update(req, res, next) {


        try {

            if (req.params && req.params.blogId) {

                //To check if the blog is created by that user or not
                const user = req.user
                const blogInfo = blog.findOne({ _id: req.params.blogId, createdBy: user.userId })

                if (blogInfo) {
                    const result = await blogService.update(req.params.blogId, req.body)
                    res.send(result)
                } else {
                    res.status(400).send("Blog Id does'nt exists")
                }

            } else {
                res.status(400).send('Blog Id is required')
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async delete(req, res, next) {

        try {
            if (req.params && req.params.blogId) {
                const result = await blogService.delete(req.params.blogId)
                res.send(result)
            } else {
                res.status(400).send("Blog Id is required")
            }
        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async create(req, res, next) {


        try {


            if (req.body) {

                const result = await blogService.create(req.body)
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
