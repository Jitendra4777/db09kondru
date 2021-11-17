var apple = require('../models/apple'); 
 
// List of all apples 
exports.apple_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple list'); 
}; 
 
// for a specific apple. 
// for a specific apple. 
exports.apple_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await apple.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle apple create on POST. 
exports.apple_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple create POST'); 
}; 
 
// Handle apple delete form on DELETE. 
exports.apple_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id); 
}; 
 
// Handle apple update form on PUT. 
exports.apple_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id); 
}; 
// List of all apples 
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
        theapples = await apple.find(); 
        res.render('apple', { title: 'Apple Search Results', results: theapples }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle apple create on POST. 
exports.apple_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new apple(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"apple_type":"goat", "cost":12, "size":"large"} 
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
exports.apple_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await apple.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle apple delete on DELETE. 
exports.apple_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await apple.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 