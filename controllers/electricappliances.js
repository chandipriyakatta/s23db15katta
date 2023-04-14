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

// Handle electricappliances create on POST.
exports.electricappliances_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: electricappliances create POST');
};
// Handle electricappliances delete form on DELETE.
exports.electricappliances_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: electricappliances delete DELETE ' + req.params.id);
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



