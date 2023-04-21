const userService = require('../services/user')
const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    async find(req, res, next) {

        try {

            const result = await userService.find()
            res.send(result)

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async findOne(req, res, next) {


        try {

            const userEmail = req.user.email

            if (userEmail) {

                const result = await userService.findOne(userEmail)
                res.send(result)

            } else {

                res.status(400).send('user Id is required')

            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async update(req, res, next) {


        try {

            if (req.params && req.params.userId) {

                const result = await userService.update(req.params.userId, req.body)
                res.send(result)

            } else {
                res.status(400).send('user Id is required')
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async delete(req, res, next) {

        try {
            if (req.params && req.params.userId) {
                const result = await userService.delete(req.params.userId)
                res.send(result)
            } else {
                res.status(400).send("user Id is required")
            }
        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }


    },

    async create(req, res, next) {

        try {

            if (req.body) {

                let { name, email, age, gender, number, password } = req.body

                if (name && email && age && gender && number && password) {

                    const olderUser = await user.findOne({ email })

                    if (!olderUser) {

                        password = await bcrypt.hash(password, 10)
                        const result = await userService.create({ name, email, age, gender, number, password })

                        const token = jwt.sign(
                            { userId: result._id, name, email, number, gender },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "2h"
                            }
                        )

                        res.send({ userId: result._id, name, email, age, gender, number, token })

                    } else {
                        res.status(400).send("User already register with same email, try with other email.")
                    }



                } else {
                    res.status(400).send("User name, email, age, gender, number, password  are required.")
                }




            } else {
                res.status(400).send("Data is required")
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    },

    async login(req, res, next) {

        try {

            if (req.body) {

                let { email, password } = req.body

                if (email && password) {

                    const userfromDb = await user.findOne({ email }).lean()
                    const isPasswordEqual = await bcrypt.compare(password, userfromDb.password)
                    if (userfromDb && isPasswordEqual) {

                        const token = jwt.sign(
                            { userId : userfromDb._id, name : userfromDb.name, email :  email, number : userfromDb.number,  gender : userfromDb.gender },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "2h"
                            }
                        )

                        res.send( {userId : userfromDb._id, name : userfromDb.name, email :  email, number : userfromDb.number,  gender : userfromDb.gender, token })

                    } else {
                        res.status(400).send("Invalid Credentials.")
                    }

                } else {
                    res.status(400).send("User email and password are required.")
                }




            } else {
                res.status(400).send("Data is required")
            }

        } catch (error) {

            console.log("Error", error)
            res.status(500).send("Internal Server Error")

        }

    }

}
