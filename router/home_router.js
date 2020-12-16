const express = require('express')

const router = express.Router()


const home_controller = require('../controller/home_controller')




router.get('/', home_controller.get_all_posts )

router.get('/add_post', home_controller.add_post )

router.post('/add_post', home_controller.create_add_post )


module.exports = router

