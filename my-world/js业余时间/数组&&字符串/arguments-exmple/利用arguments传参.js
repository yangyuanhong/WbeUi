function sidEffecting(arr){
    arr[0]=arr[2];
}
function bar(a,b,c){
    c=10;
    sidEffecting(a,b,c);//
    return a+b+c;
}
console.log(bar(1,1,1));
//12

function sidEffecting(arr){
    arr[0]=arr[2];
}
function bar(a,b,c){
    c=10;
    sidEffecting(arguments);//
    return a+b+c;
}
console.log(bar(1,1,1));
//21,结果是21，javascript变量与参数对象绑定在一起，因此更改变量会改变参数，而更改参数也会改变局部变量，即使它们不在同一个范围内。