/*
*   把得到的电影数组存入数据库中
* */
var Movie = require('../model');
var async = require('async');
var logger = require('debug')('crawl:write');
module.exports = function(movies,callback){
    async.forEach(movies,function(movie,cb){
        Movie.create(movie,cb);
        logger(`写入电影:${movie.name}`);
    },callback);
}
