var express=require("express");
var router =express.Router();
var stus=require('../db/studentDB');

router.get('/query',function(req,res,next){
    stus.findAll(function(resu){
        res.send(JSON.stringify(resu));
    });
});

router.get('/queryByArg',function(req,res,next){
    stus.findByArg(req.query.Arg,function(resu){
        if(resu.length>=1){
            res.send(JSON.stringify(resu));
        }else{
            res.send(false);
        }
    });
});

router.get('/delById',function(req,res,next){
    stus.delById(req.query.ids,function(resu){
        res.send(JSON.stringify(resu));
    });
});
router.get('/addSave',function(req,res,next){
    var student=new stus.Student(req.query.username,req.query.male,req.query.brith);
    stus.addSave(student,function(resu){
        res.send(JSON.stringify(resu));
    });
});
router.get('/update',function(req,res,next){
    var student=new stus.Student(req.query.username,req.query.male,req.query.brith);
    stus.update(req.query.id,student,function(results){
        res.send(JSON.stringify(results));
    });
});

module.exports=router;
