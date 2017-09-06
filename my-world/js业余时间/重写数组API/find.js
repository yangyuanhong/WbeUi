//find()方法返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined。
function Find(fn,sope){
    for(var i=0,n=this.length;i<n;i++){
        if(fn.call(sope,this[i],i,this)){
            return this[i];
        }
    }
    return undefined;
}
//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1;
function FindIndex(fn,sope){
    for(var i=0,n=this.length;i<n;i++){
        if(fn.call(sope,this[i],i,this)){
            return i;
        }
    }
    return -1;
}
Array.prototype.Find=Find;
var arr=new Array(4);
var a=0;
var result=arr.findIndex(function(element){
    console.log(a);
    a++;
    return element>=15;
});
// var result=arr.Find(function(element){
//     console.log(a);
//         a++;
//     return element>=12;
// });
console.log(arr);
console.log(result);
