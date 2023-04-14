var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('electricappliances', { title: 'Search Results electric' });
// });



const electricappliances_controlers= require('../controllers/electricappliances');

/* GET costumes */
router.get('/', electricappliances_controlers.electricappliances_view_all_Page );
module.exports = router;