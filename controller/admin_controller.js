const Post = require('../model/post_model')




exports.get_admin = async (req, res) => {
    const post = await Post.find()
    res.render('admin.ejs', { title: 'Admin', ejs_post_array: post })
}



exports.delete_post = async (req, res) => {
    postid = req.params.post_id
    await Post.findOneAndDelete(postid)
    res.redirect('/admin')
}



exports.get_edit_post = async (req, res) => {

    postid = req.params.id
    const post = await Post.findById(postid)
    res.render('edit_post', { title: 'Edit', edit_post: post })


}


exports.save_edit_post = async (req, res) => {

    console.log(req.body)
    postid = req.params.id
    const post = await Post.findById(postid)

    post.post_title = req.body.post_title
    post.post_image = req.body.post_image
    post.post_about = req.body.post_about

    await post.save()
    res.redirect('/admin')

}