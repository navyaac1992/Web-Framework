 $(document).ready(function(){
    var count=1,
    page_value=1,
    sliderposition=0;

    $('.slider div:first').addClass('active');
    $('.slide div:first').addClass('activechild');
    $('.linking a:first').addClass('hi-light');

    var pages = $('.slider div.active').children().size();
    $('.paging').text(page_value+"/"+pages);
    var imagewidth = $('.visible-area').width();
    var totalimages = $('.slidechild').size();
    var sliderwidth = imagewidth * totalimages;
    $('.slider').css({'width': sliderwidth});

    //Function for onclick of next link

    $('.next').on("click", function(){

      //next div that has to be displayed and the link that has to be selected is assigned
      $activechild = $('.slide div.activechild').next();
      $nextlink = $('.linking a.hi-light').next();
          //if the node is last child of the particular set
          if($('.slide div.activechild').is(':last-child')){
            page_value=1;
            $active = $('.slider div.active').next();
            $('.slider div').removeClass('active');
            $active.addClass('active');
            pages = $('.slider div.active').children().size();
            $('.paging').text(page_value+"/"+pages);
            $('.slide div').removeClass('activechild');
            $('.active div.slidechild').eq(0).addClass('activechild');
            $('.linking a').removeClass('hi-light');
            $nextlink.addClass('hi-light');
          }
          //else the node is the middle of the set
          else{
            page_value=page_value+1;
            $('.paging').text(page_value+"/"+pages);
            $('.slide div').removeClass('activechild');
            $activechild.addClass('activechild');
          }
          //if the node is the last image of the last set
          if(count==totalimages){
            count=count - totalimages;
            $('.slider div:first').addClass('active');
            $('.slide div:first').addClass('activechild');
            pages = $('.slider div.active').children().size();
            $('.paging').text(page_value+"/"+pages);
            $('.linking a:first').addClass('hi-light');
          }
          //slider postion to which it has to be slided
        sliderposition = count * imagewidth;
        count=count+1;
        $('.slider').animate({'left': -sliderposition}, 500);
    });
    // On click of previous link
    $('.previous').click(function(){
        $activechild = $('.slide div.activechild').prev();
        $nextlink = $('.linking a.hi-light').prev();
         //if the node is first child of the particular set
          if($('.slide div.activechild').is(':first-child')){
            $active = $('.slider div.active').prev();
            $('.slider div').removeClass('active');
            $active.addClass('active');
            pages = $('.slider div.active').children().size();
            page_value = pages;
            $('.paging').text(page_value+"/"+pages);
            $('.slide div').removeClass('activechild');
            $('.active div.slidechild:last').addClass('activechild');
            $('.linking a').removeClass('hi-light');
            $nextlink.addClass('hi-light');
          }
          //else the node is the middle of the set
          else{
            page_value=page_value-1;
            $('.paging').text(page_value+"/"+pages);
            $('.slide div').removeClass('activechild');
            $activechild.addClass('activechild');
          }
          //if the node is the first image of the first set
        if(count==1){
          count=totalimages-1;
          $('.slide:last').addClass('active');
          $('.slide div.slidechild:last').addClass('activechild');
          pages = $('.slider div.active').children().size();
          page_value = pages;
          $('.paging').text(page_value+"/"+pages);
          $('.paging').text(page_value+"/"+pages);
            $('.linking a:last').addClass('hi-light');
        }
        //else decrement the count
        else{
          count=count-2;
        }
         //slider postion to which it has to be slided
        sliderposition = count * imagewidth;
        count=count+1;
        $('.slider').animate({'left': -sliderposition}, 500);
    });
    //on click of link one
    $(".link1").click(function(){
      //hi-light the first link and assign active to the first div and child
      $('.linking a').removeClass("hi-light");
      $('.link1').addClass("hi-light");
      $('.slider div').removeClass('active');
      $('.slide div').removeClass('activechild');
      $('.slider div:first').addClass('active');
      $('.slide div:first').addClass('activechild');
      count = 0;
      page_value = 1;
      pages = $('.slider div.active').children().size();
      $('.paging').text(page_value+"/"+pages);
      sliderposition = count * imagewidth;
      count=count+1;
      $('.slider').animate({'left': -sliderposition}, 500);
    });
    $(".link2").click(function(){
      //hi-light the second link and assign active to the second div and child
      $('.linking a').removeClass("hi-light");
      $('.link2').addClass("hi-light");
      $('.slider div').removeClass('active');
      $('.slide div').removeClass('activechild');
      $('.slider div.slide').eq(1).addClass('active');
      $('.active div').eq(0).addClass('activechild');
      count = $('.slider div').eq(0).children().size();
      page_value = 1;
      pages = $('.slider div.active').children().size();
      $('.paging').text(page_value+"/"+pages);
      sliderposition = count * imagewidth;
      count=count+1;
      $('.slider').animate({'left': -sliderposition}, 500);
    });
    $(".link3").click(function(){
      //hi-light the third link and assign active to the third div and child
       $('.linking a').removeClass("hi-light");
      $('.link3').addClass("hi-light");
      $('.slider div').removeClass('active');
      $('.slide div').removeClass('activechild');
      $('.slider div.slide').eq(2).addClass('active');
      $('.active div').eq(0).addClass('activechild');
      var second=$('.slider div.slide').eq(1).children().size();
      count = $('.slider div.slide').eq(0).children().size() + second;
      page_value = 1;
      pages = $('.slider div.active').children().size();
      $('.paging').text(page_value+"/"+pages);
      sliderposition = count * imagewidth;
      count=count+1;
      $('.slider').animate({'left': -sliderposition}, 500);
    });
    $(".link4").click(function(){
      //hi-light the fourth link and assign active to the fourth div and child
       $('.linking a').removeClass("hi-light");
      $('.link4').addClass("hi-light");
      $('.slider div').removeClass('active');
      $('.slide div').removeClass('activechild');
      $('.slider div.slide').eq(3).addClass('active');
      $('.active div').eq(0).addClass('activechild');
      var second = $('.slider div.slide').eq(1).children().size();
      var third = $('.slider div.slide').eq(2).children().size();
      count = $('.slider div.slide').eq(0).children().size() + second + third;
      page_value = 1;
      pages = $('.slider div.active').children().size();
      $('.paging').text(page_value+"/"+pages);
      sliderposition = count * imagewidth;
      count=count+1;
      $('.slider').animate({'left': -sliderposition}, 500);
    });

  });