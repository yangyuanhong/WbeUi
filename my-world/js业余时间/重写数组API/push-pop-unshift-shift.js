//1.push(),可接受任意类型的参数，将他们逐个添加到数组的末尾，并返回数组的长度
function Pushs(){
    var n=this.length;
    for(var i=0;i<arguments.length;i++){
        this[n+i]=arguments[i];
    }
    return this.length;
}
//2.pop(),从数组末尾移除最后一项，减少数组的length值，返回移除的项
function Pop(){
    var n=this[this.length-1];
    this.length--;
    return n;
}
//3.shift(),移除数组中的第一个项并且返回该项，同时将数组的长度减一；
function Shift(){
    var n=this[0];
    for(var i=0;i<this.length;i++){
        this[i]=this[i+1];
    }
    this.length--;
    return n;
}
//4.unshift(),在数组的前端添加任意个项，并返回新数组的长度
function Unshift(){
    var l=this.length;
    var n=this.length+arguments.length;
    var ars=new Array(n);
    for(var i=0;i<arguments.length;i++){
        ars[i]=arguments[i];
    }
    var k=0;
    for(var j=arguments.length;j<n;j++){
        ars[j]=this[k];
        k++;
    }
    for(var c=0;c<n;c++){
        this[c]=ars[c];
    }
    return n;
}
//5.reverser(),反转数组项的顺序，
function Reverse(){
    var n=this.length;
    var arr=[];
    for(var i=0;i<n;i++){
        arr[i]=this[n-1-i];
    }
    for(var i=0;i<n;i++){
        this[i]=arr[i];
    }
    // console.log(arr);
}
//6.concat(),数组拼接，先创建当前数组的一个副本，然后将接受到的参数添加到这个副本的末尾，
//并返回副本，不改变原数组
function Concat(){
    var ars=[];
    for(var a=0;a<arguments.length;a++){
        if(!Array.isArray(arguments[a])){
            ars.push(arguments[a]);
        }else{
            for(var s=0;s<arguments[a].length;s++){
                ars.push(arguments[a][s]);
            }
        }
    }
    // console.log(ars);
    var arr=[];
    var n=this.length;
    for(var j=0;j<n;j++){
        arr[j]=this[j];
    }
    for(var i=0;i<ars.length;i++){
        arr[n+i]=ars[i];
    }
    return arr;
}
//7.slice()，数组切割，可接受一个或者两个参数(返回项的起始位置，结束位置)，当接受一个参数时
//从该参数指定的位置开始，到当前数组末尾的所有项当接受两个参数，起始到结束之间的项，但是不包含结束位置的项。不改变原数组
function Slice(){
    var arr=[];
    if(arguments[0]<0){
            arguments[0]=this.length+arguments[0];
        }
    if(arguments[1]<0){
        arguments[1]=this.length+arguments[1];
    }
    if(arguments.length==1){
        
        for(var i=0;i<this.length;i++){
            arr[i]=this[arguments[0]+i];
        }
    }else if(arguments.length==2){
        for(var j=0;j<arguments[1]-1;j++){
            arr[j]=this[arguments[0]+j];
        }
    }
    return arr;
}
//8.splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
//如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
function Splice(){
    var n=this.length;
    var b=arguments.length;
    if(arguments[0]<0){
            arguments[0]=n+arguments[0];
        }
    if(b==2){
        for(var i=0;i<n-arguments[0]-arguments[1];i++){
            this[arguments[0]]=this[arguments[0]+arguments[1]];
        }
        // console.log(this);
        this.length-=arguments[1];
    }
    if(b>=3){
        var arr=[];
        for(var j=0;j<arguments[0];j++){
            arr.push(this[j]);
        }
        for(var k=2;k<b;k++){
            arr.push(arguments[k]);
        }
        for(var p=arguments[0]+arguments[1];p<=n-arguments[0];p++){
            arr.push(this[p]);
        }
        for(var c=0;c<arr.length;c++){
            this[c]=arr[c];
        }
    }

}
//9.indexOf(),从数组开头向后查找，使用全等操作符，找不到该元素返回-1。第一个参数为要查找的项，第二个参数（可选）为索引开始位置
function IndexOf(){
    if(arguments.length==1){
        arguments[1]=0;
    }
    if(arguments[1]<0){
            arguments[1]=this.length+arguments[1];
        }
    for(var i=arguments[1];i<this.length;i++){
        if(arguments[0]===this[i]){
            return i;
        }
    }
    return -1;
}
//10.LastIndexOf(),从数组末尾向前查找，使用全等操作符，找不到该元素返回-1。第一个参数为要查找的项，第二个参数（可选）为索引开始位置
function LastIndexOf(){
    if(arguments.length==1){
        arguments[1]=this.length-1;
    }
    if(arguments[1]<0){
            arguments[1]=this.length+arguments[1];
        }
    for(var i=arguments[1];i>=0;i--){
        if(arguments[0]===this[i]){
            return i;
        }
    }
    return -1;
}
//11.join()方法用于把数组中的所有元素放入一个字符串，返回一个字符串，该字符串是把数组中的每个元素转为字符串，然后
//然后把这些字符串链接起来，在元素之间插入参数字符串而生成的
function Join(){
    var str="";
    var arg="";
    if(arguments.length==0){arg=",";}
    else{arg=arguments[0];}
    for(var i=0;i<this.length;i++){
       if(i<this.length-1){
        str+=this[i]+arg;
       }else{
        str+=this[i];
       }
    }
    return str;
}
    Array.prototype.Join=Join;
    var ar=[];
    ar.push(1,2,3);
    // var result=ar.join("s");
    var result=ar.Join("s");
    console.log(ar);
    console.log(result);
    

