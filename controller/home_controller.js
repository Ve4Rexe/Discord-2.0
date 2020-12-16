const Post  = require('../model/post_model')



exports.get_all_posts = async (req , res )=>{
    const post  =  await  Post.find()
    res.render('home.ejs' , { title : 'Home'  , ejs_post_array : post   } )
}



exports.add_post = ( req , res ) =>{
    res.render( 'add_post.ejs' , { title : 'Add-Post'} )
}



exports.create_add_post = async( req , res ) =>{
   
    const post =  new Post( req.body  )
    await post.save()
    res.redirect('/')

}