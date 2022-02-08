$(document).ready(function(){
  var a=1;
  $(".main .main_wrap .main_set .back-to-position").addClass("show")
  $("a").click(function(e){
   e.preventDefault()
  })

    $("header .header_wrap .nav_wrap>ul>.gnb a").hover(function(){
      $(this).addClass("active")
    },function(){
      $("header .header_wrap .nav_wrap>ul>.gnb a").removeClass("active")
    })


    $("header .header_wrap .nav_wrap>ul>.gnb").hover(function(){
      var b=$(this).index()
      $(".sub_gnb ul li .gnb_text").eq(b).css("height","auto").slideDown(300,'linear')
    },function(){
      $(".sub_gnb ul li .gnb_text").css("height","0").css("display","none")
    })
    $("header .header_wrap .search").click(function(){
        $(this).css("width","177px")
        $(this).find("input").show(300)
        $("header .header_wrap .nav").css("right","246px")
    })
    // $("header .header_wrap .search a").click(function(){
    //     if($("header .header_wrap .search input").val()==''){
    //       // alert("no")
    //     }else{
    //       return
    //     }
    // })
    // ----pc sub----

    $(".m_sub_wrap .m_sub_menu> ul>span.m_title").click(function(){
            if(a==1){
          $(this).find("span").css("transform","rotate(180deg)")
          $(this).siblings(".sub").slideDown(300)
          a=0
        }else{
          $(this).find("span").css("transform","rotate(0)")
          $(this).siblings(".sub").slideUp(300)
          a=1
      }
    })
    $(".m_sub_wrap .m_sub_menu> ul>li.sub>a").click(function(){
      var $length=$(this).parent("li").find("ul>li").length
      if(a==0){
        $(this).parent("li").find(">ul").css({
          height:$length*50+"px"
        })
          $(this).find("span").css("transform","rotate(180deg)")
          a=1
        }else{
        $(this).parent("li").find(">ul").css("height","")
        $(this).find("span").css("transform","rotate(0)")
          a=0
      }
    })
    $(".mheader .m_gnb ul li:nth-child(3) a").click(function(){
      $(".m_sub_wrap .btn_sub_close").show()
      $(".m_sub_wrap").css("right","0")
      $(".m_sub_back").show()
    })
    $(".m_sub_wrap .btn_sub_close").click(function(){
      $(".m_sub_wrap .btn_sub_close").hide()
      $(".m_sub_wrap").css("right","-70%")
      $(".m_sub_back").hide()
    })
    // ----mobile sub----
    $(".line_notice .line_notice_wrap .line_bg_right a").click(function(){
      if(a==1){
        $(".prom_main").slideDown(300)
        $(this).find("span").css("transform","rotate(180deg)")
        a=0
      }else{
        $(".prom_main").slideUp(300)
        $(this).find("span").css("transform","")
        a=1
      }
    })


//---------footer mobile
    $(".footer .footer_wrap > ul>span.m_title").click(function(){
            if(a==1){
          $(this).find("span").css("transform","rotate(180deg)")
          $(this).siblings("li").slideDown(300)
          a=0
        }else{
          $(this).find("span").css("transform","rotate(0)")
          $(this).siblings("li").slideUp(300)
          a=1
      }
    })
    $(".footer .footer_wrap> ul>li>a").click(function(){
      var $length=$(this).parent("li").find("ul>li").length
      if(a==0){
        $(this).parent("li").find(">ul").css({
          height:$length*50+"px"
        })
          $(this).find("span").css("transform","rotate(180deg)")
          a=1
        }else{
        $(this).parent("li").find(">ul").css("height","")
        $(this).find("span").css("transform","rotate(0)")
          a=0
      }
    })

		
    $(window).scroll(function(){
      var pos =$(window).scrollTop()
      console.log(pos)
      if(pos>600){
        $(".bean .bean_wrap .back-to-position").addClass("show")
      }if(pos>1600){
        $(".pick .pick_wrap .back-to-position").addClass("show")
      }if(pos>2500){
        $(".reserve .reserve_wrap .reserv_img").addClass("show")
      }if(pos>3000){
        $(".store .store_wrap .back-to-position").addClass("show")
      }
    })
    $(".line_notice .notice_left_text .slick").slick({
      autoplaySpeed: 5000,
      speed: 100,
      autoplay:true,
      vertical : true,
    })
    $('.slider-for').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 300,
      centerPadding: '60px',
      arrows: true,
      prevArrow : "<div class='btn_arrow prev'><a></a></div>", 
      nextArrow : "<div class='btn_arrow next'><a></a></div>",
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplaySpeed: 3000,
      autoplay:true,
      responsive:[
        {
          breakpoint:960,
          settings:{
            slidesToShow:1
          }
        }
      ]
    });
    var c=1
    $(".prom_main .slider .play").click(function(){
      if(c==1){
        $(this).addClass("stop")
        $('.slider-for').slick('slickPause');
        c=0
      }else if(c==0){
        $('.slider-for').slick('slickPlay');
        $(this).removeClass("stop")
        c=1
      }
    })

  

})
