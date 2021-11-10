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
// List of all Costumes 
exports.apple_list = async function(req, res) { 
    try{ 
        theApple = await apple.find(); 
        res.send(theApple); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.apple_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await apple.find(); 
        res.render('apple', { title: 'Apple Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle Costume create on POST. 
exports.apple_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new apple(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  