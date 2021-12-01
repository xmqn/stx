$(document).ready(function(){
    // 1. gnb 를 저장한다.
    var gnb = $('.gnb');
    // 2. 주메뉴 depth1
    var depth1 = $('.depth1');
    var depth1_a = $('.depth1 > li > a');

    // 3. 서브메뉴 div .depth2
    var depth2 = $('.depth2');
    // 4. sumenu
    var submenu = $('.submenu');
    // 5. .submenu > li
    var submenu_li = $('.submenu > li');

    gnb.mouseenter(function(){
        depth2.addClass('depth2-active');
    });
    gnb.mouseleave(function(){
        depth2.removeClass('depth2-active');
    });

    $.each(submenu_li, function(index, item){

        submenu_li.eq(index).mouseenter(function(){
            depth1_a.removeClass('depth1-active');
            depth1_a.eq(index).addClass('depth1-active');
        });
        
        submenu_li.eq(index).mouseleave(function(){
            depth1_a.removeClass('depth1-active');
        });

    });
});