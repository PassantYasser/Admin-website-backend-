const express = require('express')
const router = express.Router()




//connect controlller 
const customerController = require('../Controller/customerController')

//!!!!get request\\
router.get("/", customerController.customer_get);

//add page      
router.get('/user/add.html',customerController.customer_add_get)

//edit page      
router.get('/edit/:id',customerController.customer_edit_get)

//view page      
router.get('/view/:id',customerController.customer_view_get); 

//!!!!post request\\
router.post('/' ,customerController.customer_post)

//search
router.post('/search' ,customerController.customer_search_post)

//!!!!!delete request\\ 
router.delete('/delete/:id',customerController.customer_delete_delete)

//!!!!!update request\\ 
router.put('/edit/:id',customerController.customer_edit_put)





module.exports = router

