//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。forEach() 对于空数组是不会执行回调函数的。该方法没有返回值
function ForEach(fn,sope){
    // for(var i=0;i<this.length;i++){
    //     fn.call(sope,this[i],i,this);
    // }
    for(var key in this){
        if(!isNaN(+key))
        fn.call(sope,this[key],+key,this);
    }
    
}





Array.prototype.ForEach=ForEach;
// var arr=new Array(4);
var arr=[];
// arr.push(undefined,undefined,undefined,undefined);
arr.push(1,2,3,4);
// var result=arr.forEach(function(ele){
//     console.log(ele);
// });
var result=arr.ForEach(function(ele){
    console.log(ele);
});
// console.log(arr);
// console.log(result);