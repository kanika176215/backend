const mongoose = require('mongoose')
const { Schema } = mongoose;

const categorySchema = new Schema({
    name : {
        type  : String,
        required  : true
    },
    slug : {
        type : String,
        required : true,
        lowercase : true
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    modifiedAt : {
        type : Date,
        default : new Date()
    }
});

const category = mongoose.model("category", categorySchema);
module.exports = category
