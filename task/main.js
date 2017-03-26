var async = require('async');
var read  = require('./read');
var write = require('./write');
var debug = require('debug');
var logger = debug('crawl:main');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';

logger('开始任务执行');

async.waterfall([
    function (callback) {
        read(url,callback);
    },
    function (movies,callback) {
        write(movies,callback)
    }
],function (callback) {
    logger('全部任务执行完毕');
});
