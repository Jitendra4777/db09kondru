var apple = require('../models/apple'); 
// Handle a show one view with id specified by query 
exports.apple_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await apple.findById( req.query.id) 
        console.log(result)
        res.render('appledetail',  
{ title: 'apple Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a apple. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.apple_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('applecreate', { title: 'apple Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a apple. 
// query provides the id 
exports.apple_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await apple.findById(req.query.id) 
        res.render('appleupdate', { title: 'apple Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.apple_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await apple.findById(req.query.id) 
        res.render('appledelete', { title: 'apple Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 