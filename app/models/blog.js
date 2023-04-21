const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    modifiedAt: {
        type: Date,
        default: new Date()
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    modifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'tag'
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
});

const blog = mongoose.model("blog", blogSchema);
module.exports = blog
