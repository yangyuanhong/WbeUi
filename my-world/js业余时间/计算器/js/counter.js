//运算符区
//jack运算对象，拥有强大的运算能力
var jack={
	add: function{
		 var tatol=0;
		 for(var key in arguments){
		 	var vul =arguments[key];
		 	tatol+=vul;
		 }
		 return tatol;
	}
	del: function{
		var tatol=0;
		 for(var key in arguments){
		 	var vul =arguments[key];
		 	tatol-=vul;
		 }
		 return tatol;
	}
}
//搬运工，将页面的数据传输给jack
var larry = {
}