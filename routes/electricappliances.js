var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('electricappliances', { title: 'Search Results electric' });
// });

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 



const electricappliances_controlers= require('../controllers/electricappliances');

/* GET electricappliancess */
router.get('/', electricappliances_controlers.electricappliances_view_all_Page );

router.get('/detail', electricappliances_controlers.electricappliances_view_one_Page);
/* GET create electricappliances page */
router.get('/create',secured, electricappliances_controlers.electricappliances_create_Page);
/* GET create update page */
router.get('/update', secured,electricappliances_controlers.electricappliances_update_Page);
/* GET delete electricappliances page */
router.get('/delete', secured,electricappliances_controlers.electricappliances_delete_Page);

module.exports = router;