// Handle a show one view with id specified by query 
exports.apple_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await apple.findById( req.query.id) 
        res.render('appledetail',  
{ title: 'apple Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 