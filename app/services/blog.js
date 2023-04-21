const blog = require('../models/blog')

module.exports = {

    async find() {


        const allBlogs = await blog.find({}).populate([
            {
                path: 'tags',
                model: 'tag'
            },
            {
                path: 'createdBy',
                model: 'user'
            },
            {
                path: 'category',
                model: 'category'
            }
        ]).lean()

        return allBlogs

    },

    async findOne(blogId) {

        const singleBlog = await blog.findById(blogId).populate([
            {
                path: 'tags',
                model: 'tag'
            },
            {
                path: 'createdBy',
                model: 'user'
            },
            {
                path: 'category',
                model: 'category'
            }
        ]).lean()
        return singleBlog

    },

    async update(blogId, data) {

        const updatedBlog = blog.findByIdAndUpdate(blogId, data)
        return updatedBlog

    },

    async delete(blogId) {

        const deletedBlog = await blog.findOneAndDelete(blogId)
        return deletedBlog


    },

    async create(data) {

        const newBlog = new blog(data)
        await newBlog.save()
        return newBlog


    }

}
