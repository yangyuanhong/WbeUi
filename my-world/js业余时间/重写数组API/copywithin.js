//copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
function CopyWithin(){
    var a=arguments[0];
    var b=arguments[1];
    var c=arguments[2];
    var arr=[];
    if(a<0){
        a=this.length+a;
    }
    if(b<0){
        b=this.length+b;
    }
    if(arguments.length==1){
        b=0;
        c=this.length;
    }
    if(arguments.length==2){
        c=this.length;
    }
    if(arguments.length==3&&c<0){
        c=this.length+c;
    }
    for(var j=0;j<a;j++){
        arr[j]=this[j];
    }
    for(var s=b;s<c;s++){
        arr.push(this[s]);
    }
    for(var i=a+c-b,n=this.length;i<n;i++){
        arr.push(this[i]);
    }
    //  console.log(arr);
    for(var p=0;p<this.length;p++){
        this[p]=arr[p];
    }
    return this;
}



//测试
Array.prototype.CopyWithin=CopyWithin;
var ars=[];
ars.push(1,2,3,4,5);
// var result=ars.copyWithin(2);//Array [ 1, 2, 1, 2, 3 ]
// var result=ars.CopyWithin(-2);



// var result=ars.copyWithin(0,3);//Array [ 4, 5, 3, 4, 5 ]
// var result=ars.CopyWithin(0,3);


// var result=ars.copyWithin(0,3,4);//Array [ 4, 2, 3, 4, 5 ]
// var result=ars.CopyWithin(0,3,4);
var result=ars.CopyWithin(-2,-3,-1);

console.log(result);
console.log(ars);

