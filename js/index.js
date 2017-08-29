$(function(){
    // 项链的滑动效果动画
    // if($(window).width()>1768){
    //     $('.right img').mouseover(function(){
    //         $('.right').stop();
    //         $('.right').animate({
    //             width:'22%'
    //         },'noraml');
    //     });
    //     $('.right img').stop().mouseout(function(){
    //         $('.right').stop();
    //         $('.right').animate({
    //             width:'20%'
    //         },'noraml');
    //     })
    // }
    
     var width=$(window).width();
     if(width>=1500){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.55);
     }else if(width>=1200&&width<1500){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.65);
     }
     else if(width>=900&&width<1200){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.65);
     }
     else if(width>=600&&width<900){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.65);
     }
     else if(width>=500&&width<600){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.65);
     }
     else if(width>300&&width<500){
         $('#xl .xl-bottom').css('height',$('#xl .xl-bottom').width()*0.75);
     }
     // 导航按钮出现
     if($(window).width()<420){
        $('.collapsed').css('display','block');
     }else{
        $('.collapsed').css('display','none');
     }
     $('.collapsed').click(function(){
        $('#nav2').toggle();
     })
})
     