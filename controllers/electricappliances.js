var electricappliances = require('../models/electricappliances');
// List of all electricappliancess
//exports.electricappliances_list = function(req, res) {
//res.send('NOT IMPLEMENTED: electricappliances list');
//};
// for a specific electricappliances.
//exports.electricappliances_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: electricappliances detail: ' + req.params.id);
//};


// for a specific electricappliances.
exports.electricappliances_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await electricappliances.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle electricappliances update form on PUT.
//exports.electricappliances_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: electricappliances update PUT' + req.params.id);
//};

// Handle electricappliances update form on PUT.
exports.electricappliances_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await electricappliances.findById(req.params.id)
        // Do updates of properties
        if (req.body.electricitems)
            toUpdate.electricitems = req.body.electricitems;
        if (req.body.company) toUpdate.company = req.body.company;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// List of all electricappliances
exports.electricappliances_list = async function (req, res) {
    try {
        theelectricappliances = await electricappliances.find();
        res.send(theelectricappliances);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.electricappliances_view_all_Page = async function (req, res) {
    try {
        theelectricappliances = await electricappliances.find();
        res.render('electricappliances', { title: 'electronics Search Results', results: theelectricappliances });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//Handle electricappliances  create on POST.
exports.electricappliances_create_post = async function (req, res) {
    console.log(req.body)
    let document = new electricappliances();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"electricappliances_type":"goat", "cost":12, "size":"large"}
    document.electricitems = req.body.electricitems;
    document.company = req.body.company;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// code for SS4 and SS5
// Handle Costume delete on DELETE.
exports.electricappliances_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await electricappliances.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle a show one view with id specified by query
exports.electricappliances_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await electricappliances.findById( req.query.id)
    res.render('electricappliancesdetail',
   { title: 'electricappliances Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a electricappliances.
// No body, no in path parameter, no query.
// Does not need to be async
exports.electricappliances_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electricappliancescreate', { title: 'electricappliances Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a electricappliances.
// query provides the id
exports.electricappliances_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await electricappliances.findById(req.query.id)
    res.render('electricappliancesupdate', { title: 'electricappliances Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.electricappliances_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await electricappliances.findById(req.query.id)
    res.render('electricappliancesdelete', { title: 'electricappliances Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

    

