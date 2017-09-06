/*

给定二进制字符串，将其换算成对应的十进制数字
示例1
输入

'11000000'

输出

192
*/
function base10(str) {
    // var num=str.split("").reverse().reduce(function(a,b){return +a+(+b)});
    var num=str.split("").reverse().reduce(function(a,b,index){
        return a+b*Math.pow(2,index);
    },0);
    
    return num;
}