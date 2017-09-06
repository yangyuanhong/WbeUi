$(function(){
    $(".big").load("component/index-mote.html");
        var uls=$("nav>ul")[0];
    var lis=$("nav>ul>li"); 
     $(lis[0]).on("click",function(event){
        if(lis[1].style)lis[1].style="color:#fff;border-bottom: 5px solid #282828;";
        if(lis[2].style)lis[2].style="color:#fff;border-bottom: 5px solid #282828;";
        lis[0].style="color:#ff752a;border-bottom: 5px solid #ff752a;";
        console.log(ints);
        if(ints)clearInterval(ints);
        $(".big").load("component/index-mote.html");
        event.isDefaultPrevented();
     });
     $(lis[1]).on("click",function(event){
        if(lis[0].style)lis[0].style="color:#fff;border-bottom: 5px solid #282828;";
        if(lis[2].style)lis[2].style="color:#fff;border-bottom: 5px solid #282828;";
        lis[1].style="color:#ff752a;border-bottom: 5px solid #ff752a;";
        $(".big").load("component/index-yanyi.html");
        event.isDefaultPrevented();
     });
     $(lis[2]).on("click",function(event){
        if(lis[1].style)lis[1].style="color:#fff;border-bottom: 5px solid #282828;";
        if(lis[0].style)lis[0].style="color:#fff;border-bottom: 5px solid #282828;";
        lis[2].style="color:#ff752a;border-bottom: 5px solid #ff752a;";
        $(".big").load("component/index-zhuanye.html");
        event.isDefaultPrevented();
     });
});