const category = require('../models/category')

module.exports = {

    async find() {

        const allcategorys = await category.find({}).lean()
        return allcategorys

    },

    async findOne(categoryId) {

        const singlecategory = await category.findById(categoryId).lean()
        return singlecategory

    },

    async update(categoryId, data) {

        const updatedcategory = category.findByIdAndUpdate(categoryId, data)
        return updatedcategory

    },

    async delete(categoryId) {

        const deletedcategory = await category.findOneAndDelete(categoryId)
        return deletedcategory


    },

    async create(data) {

        const newcategory = new category(data)
        await newcategory.save()
        return newcategory


    }

}
