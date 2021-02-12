$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY>20){
          $('.navber').addClass("sticky");
      }else{
        $('.navber').removeClass("sticky");
      }
    });
    //navber script
    $('.menu-btn').click(function(){
       $('.navber .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.caruousl').owlCarousl({
     margin:20,
     loop: true,
     autoplayTimeOut:2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
         nav: false
        },
        600:{
          items: 2,
         nav: false
        },
      1000:{
         items: 3,
        nav: false
      }
     }
    });
});