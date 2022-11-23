jQuery(document).ready(function(){
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

            $('.vegas').vegas({
                slides: [
                    {   src: '/images/vegas_1.jpg' },
                    {   src: '/images/vegas_2.jpg' },
                    {   src: '/images/vegas_3.jpg',
                        video: {
                            src: [
                                '/videos/vegas_1.mp4',
                            ],
                            loop: false,
                            mute: true
                        }
                    }
                ]
            });
        }
    });
    