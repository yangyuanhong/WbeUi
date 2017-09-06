
// EventUtil.on($outer,"click",function(){});
var EventUtil = {
	on:function(source,event,handler){
		if(source.addEventListener){
			source.addEventListener(event,handler);
		} else if(source.attachEvent){
			source.attachEvent("on"+event,handler);
		} else {
			source["on"+event] = handler;
		}
	},
	off:function(){

	}

}