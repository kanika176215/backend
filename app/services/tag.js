const tag = require('../models/tag')

module.exports = {

    async find() {

        const alltags = await tag.find({}).lean()
        return alltags

    },

    async findOne(tagId) {

        const singletag = await tag.findById(tagId).lean()
        return singletag

    },

    async update(tagId, data) {

        const updatedtag = tag.findByIdAndUpdate(tagId, data)
        return updatedtag

    },

    async delete(tagId) {

        const deletedtag = await tag.findOneAndDelete(tagId)
        return deletedtag


    },

    async create(data) {

        const newtag = new tag(data)
        await newtag.save()
        return newtag


    }

}
