function useArguments() {
    for(var i=0,arrs=[];i<arguments.length;i++){
        arrs.push(arguments[i]);
    }
    return arrs.reduce(function(a,b){return a+b;});
}
console.log(useArguments(1, 2, 3, 4));