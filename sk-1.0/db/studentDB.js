//var con=require('./pool.js');
var sql=require('./sql.js');
var table='xk_student';
var mysql=require('mysql');
var con;
function craecon(){
    con=mysql.createConnection({
        host:'127.0.0.1',
        database:'web1702',
        user:'root',
        password:'root'
  });
}
class Student {
    constructor(name,gender,brith) {
        this.name = name;
        this.gender = gender;
        this.brith= brith;
    }
}
//查询所有学生
function findAll(handler){
    craecon();
    con.connect();
    con.query(sql.sqlquery(table),function(err,results){
        if(err)throw err;
        handler.call(this,results);    
    });
    con.end();
}
//通过关键字查找学生
function findByArg(arg,handler){
    craecon();
    con.connect();
            con.query(sql.sqlquery(table,arg),[arg],function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
            });
            con.end();
    return true;
}
//删除
function deleteById(ids,handler){
    craecon();
    con.connect();
            con.query(sql.sqldel(table,ids),function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                //回收
            });
            con.end();
} 
//添加学生信息
function addSave(student,handler){
    craecon();
    con.connect();
            var param=[];
            for(var key in student){
                param.push(student[key]);
            }
            con.query(sql.sqladd(table),param,function(err,results){
                if(err)throw err;
                else{
                    handler.call(this,results);
                }
            });
            con.end();
            
}
//通过id修改学生信息
function update(id,student,handler){
    craecon();
    con.connect();
    var param=[];
    for(var key in student){
        param.push(student[key]);
    }
    param.push(id);
    con.query(sql.sqlupdate(table),param,function(err,results){
        if(err)throw err;
        else{
            handler.call(this,results);
        }
    });
    con.end();
}

module.exports={
    findAll:findAll,
    findByArg:findByArg,
    delById:deleteById,
    addSave:addSave,
    Student:Student,
    update:update
}
