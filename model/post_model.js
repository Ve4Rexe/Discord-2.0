const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const postSchema = new Schema({

    post_title: { type: String, required: true },
    post_about: { type: String, required: true },
    post_image: { type: String, required: true },


})



module.exports = mongoose.model('Post' , postSchema )

