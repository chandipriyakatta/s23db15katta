var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electricappliancesRouter = require('./routes/electricappliances');
var boardRouter = require('./routes/board');
var selectorRouter=require('./routes/selector');
var electricappliances = require("./models/electricappliances");
var resourceRouter = require("./routes/resource");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/electricappliances', electricappliancesRouter);
app.use('/board', boardRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// We can seed the collection if needed on
 
 // We can seed the collection if needed on
 
 function recreateDB(){
// Delete everything
electricappliances.deleteMany();

let instance1 = new
electricappliances({electricitems:"mobile", company:'redmi',
price:300});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
electricappliances({electricitems:"laptop", company:'hp',
price:1200});
instance2.save().then(doc=>{
console.log("second object saved")}
).catch(err=>{
console.error(err)
});
let instance3= new
electricappliances({electricitems:"fan", company:'usha',
price:1000});
instance3.save().then(doc=>{
console.log("third object saved")}
).catch(err=>{
console.error(err)
});

}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
