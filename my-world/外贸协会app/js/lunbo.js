    var ints;
    console.log(ints);
    if(ints)clearInterval(ints);
    function oneGrun(){
        $(".long")[0].style.left=0;
        if(butn[1].style)butn[1].style="border: 2.5px solid #b2b2b2;";
        if(butn[2].style)butn[2].style="border: 2.5px solid #b2b2b2;";
        if(butn[3].style)butn[3].style="border: 2.5px solid #b2b2b2;";
        butn[0].style="border: 2.5px solid #fe9963;";
    }
    function twoGrun(){
        $(".long")[0].style.left=-750+"px";
        if(butn[0].style)butn[0].style="border: 2.5px solid #b2b2b2;";
        if(butn[2].style)butn[2].style="border: 2.5px solid #b2b2b2;";
        if(butn[3].style)butn[3].style="border: 2.5px solid #b2b2b2;";
        butn[1].style="border: 2.5px solid #fe9963;";
    }
    function threeGrun(){
        $(".long")[0].style.left=-1500+"px";
        if(butn[0].style)butn[0].style="border: 2.5px solid #b2b2b2;";
        if(butn[1].style)butn[1].style="border: 2.5px solid #b2b2b2;";
        if(butn[3].style)butn[3].style="border: 2.5px solid #b2b2b2;";
        butn[2].style="border: 2.5px solid #fe9963;";
    }
    function fourGrun(){
        $(".long")[0].style.left=-2250+"px";
        if(butn[0].style)butn[0].style="border: 2.5px solid #b2b2b2;";
        if(butn[1].style)butn[1].style="border: 2.5px solid #b2b2b2;";
        if(butn[2].style)butn[2].style="border: 2.5px solid #b2b2b2;";
        butn[3].style="border: 2.5px solid #fe9963;";
    }
    function tiaoyong(i){
        if(i==0)return oneGrun();
        if(i==1)return twoGrun();
        if(i==2)return threeGrun();
        if(i==3)return fourGrun(); 
    }
    var i=0;
    function ids(){
        ints=setInterval(function(){
        if(i==4)i=0;
        tiaoyong(i);
        i++;
        },2000);
        
    }
    ids();
    var muds=Array.from($(".cenont>div"));
        muds.forEach(function(ele,index,arr){
        $(ele).mouseover(function(event){
            ele.style="box-shadow: 10px 10px 10px rgba(255,235,59,0.74);";
            clearInterval(ints);
        });
        $(ele).mouseout(function(event){
            ele.style="box-shadow: 0;";
            ids();
        });
        });
    var butn=$(".but>button")
    $(butn[0]).on("click",function(event){
        oneGrun();
    })
    $(butn[1]).on("click",function(event){
        twoGrun();
    })
    $(butn[2]).on("click",function(event){
        threeGrun();
    })
    $(butn[3]).on("click",function(event){
        fourGrun();
    })
 