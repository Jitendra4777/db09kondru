var express = require('express'); 
const apple_controlers= require('../controllers/apples'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', apple_controlers.apple_view_all_Page ); 
module.exports = router; 