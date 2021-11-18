var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var apple_controller = require('../controllers/apples'); 
var apple_view = require('../controllers/newC'); 
 
/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api); 

/// apple ROUTES /// 
 
// POST request for creating a apple.  
router.post('/apples', apple_controller.apple_create_post); 

// DELETE request to delete apple. 
router.delete('/apples/:id', apple_controller.apple_delete); 

// PUT request to update apple. 
router.put('/apples/:id', 
apple_controller.apple_update_put); 
 
// GET request for one apple. 
router.get('/apples/:id', apple_controller.apple_detail); 
 
// GET request for list of all apple items. 
router.get('/apples', apple_controller.apple_list); 

/* GET detail apple page */ 
router.get('/detail', apple_view.apple_view_one_Page); 

/* GET create apple page */ 
router.get('/create',apple_view.apple_create_Page); 

/* GET create update page */ 
router.get('/update', apple_view.apple_update_Page);

/* GET create costume page */ 
router.get('/delete', apple_view.apple_delete_Page); 
 
module.exports = router; 