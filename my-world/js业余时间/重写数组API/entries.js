//entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
function Entries(){
//不理解Iterator
}
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined
console.log(arr);
console.log(iterator);
// Array Iterator {}
console.log(iterator.next().value); 
// [0, "a"]
console.log(iterator.next().value); 
// [1, "b"]
console.log(iterator.next().value); 
// [2, "c"]