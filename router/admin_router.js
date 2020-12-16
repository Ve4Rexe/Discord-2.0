const express = require('express')
const router = express.Router()
const admin_controller = require('../controller/admin_controller')



router.get('/admin' , admin_controller.get_admin )

router.get('/delete/:post_id' , admin_controller.delete_post )

router.get('/edit/:id' , admin_controller.get_edit_post )

router.post('/edit_post_save/:id' , admin_controller.save_edit_post)


module.exports = router
