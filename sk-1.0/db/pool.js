var mysql=require('mysql');
var con =mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    database:'web1702',
    user:'root',
    password:'root'
});
con.connect();
module.exports.con=con;

