var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllAlbums = function(callback) {
  connection.query('select * from kanyes', function(err, result){
    callback(result)
  });
}

module.exports.getAllAlbums = getAllAlbums;
