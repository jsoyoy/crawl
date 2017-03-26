var express = require('express');
var path = require('path');
var Movie = require('./model');
var app = express();

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
})
app.listen(8080);

// 'use strict'
// let express = require('express');
// let Movie = require('./model');
// var path = require('path');
// let app = express();
// app.set('view engine','html');
// app.set('views',path.resolve('views'));
// app.engine('html',require('ejs').__express);
// app.get('/',function(req,res){
//     Movie.find({},function(err,movies){
//         res.render('index',{movies});
//     })
// });
// app.listen(8080);