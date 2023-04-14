var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electricappliances_controller = require('../controllers/electricappliances');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electricappliances ROUTES ///
// POST request for creating a electricappliances.
router.post('/electricappliances', electricappliances_controller.electricappliances_create_post);
// DELETE request to delete electricappliances.
router.delete('/electricappliances/:id', electricappliances_controller.electricappliances_delete);
// PUT request to update electricappliances.
router.put('/electricappliances/:id', electricappliances_controller.electricappliances_update_put);
// GET request for one electricappliances.
router.get('/electricappliances/:id', electricappliances_controller.electricappliances_detail);
// GET request for list of all electricappliances items.
router.get('/electricappliances', electricappliances_controller.electricappliances_list);
module.exports = router;

