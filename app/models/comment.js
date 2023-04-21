const mongoose = require('mongoose')
const { Schema } = mongoose;

const commentSchema = new Schema({
    content : {
        type  : String,
        required  : true
    },
    //userId
    createdAt : {
        type : Date,
        default : new Date()
    },
    modifiedAt : {
        type : Date,
        default : new Date()
    }
});

const comment = mongoose.model("comment", commentSchema);
module.exports = comment
