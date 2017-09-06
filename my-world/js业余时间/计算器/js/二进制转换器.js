/*题目描述
获取数字 num 二进制形式第 bit 位的值。注意：
1、bit 从 1 开始
2、返回 0 或 1
3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
示例1
输入

128, 8

输出

1*/
function valueAtBit(num, bit) {
    var n="";
    function parser(nums){
        var s=nums%2;
        if(nums<1)return n;
        // console.log(s);
        n+=s;
        nums=Math.floor(nums/2);
        return parser(nums);
    }
    return parser(num)[bit-1]-0;
}
console.log(valueAtBit(128,8));
/*

将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
示例1
输入
65
输出
01000001
*/
function convertToBinary(num) {
	var n="";
    function parser(nums){
        var s=nums%2;
        if(nums<1)return n;
        // console.log(s);
        n+=s;
        nums=Math.floor(nums/2);
        return parser(nums);
    }
   	var t=parser(num);
    if(t.length<8){
        for(var i=0;i<8-t.length;i++){
			t+="0";
        }
    }
    return t.split("").reverse().join("");
}

