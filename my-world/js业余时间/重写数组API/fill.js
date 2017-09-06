//方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。返回修改后的数组
function Fill(){
    var a=arguments[0];
    var b=arguments[1];
    var c=arguments[2];
    var L=arguments.length;
    if(L==1){
        b=0;
        c=this.length;
    }
    if(L==2)c=this.length;
    if(L==3&&b<0)b=b+this.length;
    if(L==3&&c<0)c=c+this.length;
    for(var i=b;i<c;i++){
        this[i]=a;
    }
    return this;
    
}


//测试
Array.prototype.Fill=Fill;
var arr=[];
arr.push(1,2,3,undefined);
// var result=arr.fill(4);//[4,4,4]
// var result=arr.Fill(4);//[4,4,4]

// var result=arr.fill(4,1);//[1,4,4]
// var result=arr.Fill(4,1);//[1,4,4]

// var result=arr.fill(4, -3, -2);//[4,2,3]
// var result=arr.Fill(4, -3, -2);//[4,2,3]

// var result=arr.fill(4,NaN,NaN);
var result=arr.Fill(4,NaN,NaN);

console.log(arr);
console.log(result);