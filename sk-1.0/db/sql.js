function sqlquery(table_name,term){
    if(!isNaN(+term)){
        return "select * from "+table_name+" where id =?";
    }else if(term==undefined){
        return "select * from "+table_name;
    }else{
        return "select * from "+table_name+" where name like '%"+term+"%'";
    }
}
function sqldelete(table_name,ids){
    return "delete from "+table_name+" where id in"+"("+ids+")";
}
function sqladd(table_name){
    return 'insert into '+table_name+'(name,gender,brith) values(?,?,?)';
}
function sqlupdate(table_name){
    return 'update '+table_name+' set name=?,gender=?,brith=? where id =?';
}
module.exports={
    sqlquery:sqlquery,
    sqldel:sqldelete,
    sqladd:sqladd,
    sqlupdate:sqlupdate
}
