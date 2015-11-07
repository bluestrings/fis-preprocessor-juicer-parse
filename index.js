/**
 * @author yanbin01 <yanbin01@baidu.com>
 * @date 2015-10-26
 */

var juicer = require('juicer');
var fs = require('fs');
'use strict';
module.exports = function(content, file){

    //拼写文件名
    var filePath = file.dirname + '/data.json';

    if(fs.existsSync(filePath)) {
        //找到当前模块下data.json文件，是当前juicer模版的json数据
        var data = fs.readFileSync(filePath, 'utf-8');
        return juicer(content, JSON.parse(data));
    }
    else{
        return content;
    }
};