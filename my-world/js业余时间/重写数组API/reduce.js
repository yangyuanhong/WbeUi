//reduce()方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。返回值是回调函数最后一次被调用的返回值
function Reduce(fn,initial,sope){
        if(initial===undefined){
            initial=this.find(function(ele,index){
                if(!(ele===undefined))return ele;
            });
        }
        for(var key in this){
            if(this[key]!=initial&&(+key)<this.length)
            initial=fn.call(sope,initial,this[key],+key,this);
        }
    return initial;
}




Array.prototype.Reduce=Reduce;
//测试，
var arr=[];
// var arr=new Array(4);
// arr.push(4,5);
// arr.length=7;
var c=0;
arr.push(12,15,8,46);
// var result= arr.reduce(function(a,b,index,arr){
//     console.log(c++);
//     return a+b;
// });
var result= arr.Reduce(function(a,b,index,arr){
    console.log(c++);
    return a+b;
});
console.log(arr);//Array [ 12, 15, 8, 46 ]
console.log(result);//81