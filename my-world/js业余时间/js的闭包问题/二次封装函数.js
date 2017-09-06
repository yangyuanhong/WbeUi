function partial(fn,str1,str2){
    var result=function(num){
        return fn(str1,str2,num);
    }
    return result;
}
var sayIt = function(greeting, name, punctuation){
         return greeting + ', ' + name + (punctuation || '!');
          };
  console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));
  /*
        实现函数 partialUsingArguments，调用之后满足如下条件：
        1、返回一个函数 result
        2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
        3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
  */ 

function partialUsingArguments(fn) {
    var arr=[];
    for(var i=1;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
	var result=function(){
        for(var i=0;i<arguments.length;i++){
        arr.push(arguments[i]);
    	}
        return fn.apply(this,arr)
    };
    return result;
}