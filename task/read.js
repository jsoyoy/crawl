/*
* url 要读取的url地址
* callback回调函数
* 读取url的响应体，并且提取其中的电影列表并传输给callback
* http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
*
* */
var requeset = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug = require('debug');
var logger = debug('crawl:read');

module.exports = function (url,callack) {
    requeset({url,encoding:null},function (err,response,body) {
        body = iconv.decode(body,'gbk');
        var movies = [];
        var $ = cheerio.load(body);
        $('.keyword .list-title').each(function(){
            var $this = $(this);
            var movie = {
                name:$this.text(),//电影名称
                url:$this.attr('href')//电影URL地址
            }
            movies.push(movie);
            logger(`读取到电影:${movie.name}`);
        });
        callack(err,movies);
    })
};


// var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';
// module.exports(url,function(err,movies){
//     console.log(movies);
// });