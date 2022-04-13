const mongoose = require("mongoose")


const CommentSchema = mongoose.Schema({
    id: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId
    },
    post: {
        type: mongoose.Types.ObjectId
    },
    content: {
        type: String
    }
})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment ;