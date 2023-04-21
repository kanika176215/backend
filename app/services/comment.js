const comment = require('../models/comment')

module.exports = {

    async find() {

        const allcomments = await comment.find({}).lean()
        return allcomments

    },

    async findOne(commentId) {

        const singlecomment = await comment.findById(commentId).lean()
        return singlecomment

    },

    async update(commentId, data) {

        const updatedcomment = comment.findByIdAndUpdate(commentId, data)
        return updatedcomment

    },

    async delete(commentId) {

        const deletedcomment = await comment.findOneAndDelete(commentId)
        return deletedcomment


    },

    async create(data) {

        const newcomment = new comment(data)
        await newcomment.save()
        return newcomment


    }

}
