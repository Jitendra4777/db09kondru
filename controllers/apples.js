var apple = require('../models/apple'); 
 
// List of all Costumes 
exports.apple_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple list'); 
}; 
 
// for a specific Costume. 
exports.apple_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.apple_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.apple_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.apple_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id); 
}; 