$(function(){
    $(".conleft ul li").on('click',function(){
        $('.content').load($(this).attr('p'));
    });
    $('.conleft ul li').eq(0).trigger('click');
});