$(document).ready(function(){
    //  마우스를 오버(올렸을)했을 때 다른 작업을 멈추고  slideDown한다. 500ms = 0.5s = 500밀리초 = 0.5초
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    $('.imgslide a:gt(0)').hide();
     setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');}, 3000);

        $(".notice li:first").click(function(){
            $("#modal").addClass("active");
        });
        $(".btn").click(function(){
            $("#modal").removeClass("active");
        });
        
        if($.cookie('popup') == 'none'){
            $("#notice_wrap").hide();
        }
        var $expiresChk = $("#expiresChk");
        $(".closeBtn").on("click", closePop);
        function closePop(){
            if($expiresChk.is(":checked")){
                $.cookie("popup", "none", {expires:3, path:"/"});
            }
            $("#notice_wrap").fadeOut("fast");
        }
    });
    