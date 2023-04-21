const mongoose = require('mongoose')
const { Schema } = mongoose;

const tagSchema = new Schema({
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

const tag = mongoose.model("tag", tagSchema);
module.exports = tag
