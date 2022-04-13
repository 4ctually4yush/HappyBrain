const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, "iD is reqd"]
    },
    title: {
        type: String,

    },
    description: {
        type: String,
    },
    comments: [{
        type: mongoose.Types.ObjectId
    }],
    user: {
        type: mongoose.Types.ObjectId
    }
})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;