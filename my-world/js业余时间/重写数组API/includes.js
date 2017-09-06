//includes()方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回true或false
function Includes(){
    var bus=false;
    var a=arguments[0];
    var b=arguments[1];
    if(isNaN(a)||a==null){a=a+"";}
    if(arguments.length<=1){b=0};
    if(arguments.length>1&&b<0){b=this.length + b;}
    for(var i=b;i<this.length;i++){
        if(a==(this[i]+"")){
            bus=true;
            break;
        }
    }
    return bus;
}

Array.prototype.Includes=Includes;
var ar=[];
ar.push(1,2,null);
// var result=ar.includes(NaN);//true
var result=ar.Includes(1,-100);
console.log(ar);
console.log(result);