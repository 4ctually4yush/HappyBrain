const Post = require("../models/Post");

exports.getComments = (req, res, next) => {
    const {postId} = req.body ;

    if(!postId) {
        res.send({message: "Invalid credentials", status: false});
        return ;
    }
    try {
        const post = await Post.find({id: postId});

    const comments = post.comments ;
    let data = []

    for(let i = 0; i < comments.length; i++) {
        const comment = await Comment.findOne({id: comments[i]})
        data.append(comment)
    }

    res.send({message: data, status: true});

    } catch(err) {
        console.error("Error: ", err) ;
    }
}





