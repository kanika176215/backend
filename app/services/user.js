const user = require('../models/user')

module.exports = {

    async find() {

        const allusers = await user.find({}).lean()
        return allusers

    },

    async findOne(email) {

        const singleuser = await user.findOne({email}).lean()
        return singleuser

    },

    async update(userId, data) {

        const updateduser = user.findByIdAndUpdate(userId, data)
        return updateduser

    },

    async delete(userId) {

        const deleteduser = await user.findOneAndDelete(userId)
        return deleteduser


    },

    async create(data) {

        const newuser = new user(data)
        await newuser.save()
        return newuser


    }

}
