const express = require('express')
const app = express()
const mongoose = require('mongoose')

const ejs = require('ejs');



const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// Set ejs engine  

app.set('view engine', 'ejs')
app.set('views', 'views')





// How to get  router from router folder 
const homeRoute = require('./router/home_router')
const adminRoute = require('./router/admin_router')


// How to use router 
app.use(homeRoute)
app.use(adminRoute)




// Wild Route 
app.use('*', (req, res) => {
    res.render('404.ejs', { title: '404' })
})




mongoose.connect(
    'mongodb+srv://veer:veer1234@cluster0.yionx.mongodb.net/?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {

        console.log('Database Connected ')
        port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`Listening on Port ${port} !!!`)
        })

    })