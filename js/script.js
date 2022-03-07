$(function(){
  //==========Searchbar===============
  $('.nav-serch').on('click', function () {
    $('.search-bar').addClass('search-bar-show');
  });
  $('.search-cross').on('click', function () {
    $('.search-bar').removeClass('search-bar-show');
  });
    //=================serch bar part end=================
    //=================slide bar part start=================
    $('.testimonial').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      prevArrow: ".t-left",
      nextArrow: ".t-right",
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
    //=================slide bar part end=================
    //=================news bar part start=================
    $('.news').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2500,
      arrows: true,
      prevArrow: ".n-left",
      nextArrow: ".n-right",
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
    //=================news bar part end=================
    //=================sticky manu bar part start=================
    $(window) .scroll(function(){
      var top = $(this) .scrollTop()
      if(top > 300){
        $(".navbar") .addClass("sticky-manu")
      }
      else{
        $(".navbar") .removeClass("sticky-manu")
      }
      if(top > 300){
        $(".back-to-top") .fadeIn(300)
      }
      else{
        $(".back-to-top") .fadeOut(300)
      }
    })
    //=================sticky manu bar part end=================
    //=================back-to-top bar part end=================
    $(".back-to-top") .click(function(){
      $("html,body") .animate({scrollTop: 0},1000)
    })
    //=================back-to-top bar part start=================
    //================= navbar acctiv part start=================
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 30
      }, 1000);
    });
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      scrollLink.each(function () {
        var sectionhead = $(this.hash).offset().top - 40;
        if (scrollTop >= sectionhead) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });
    //=================navbar acctive part end=================
    //================= bar part start=================
    //=================news bar part end=================
    //================= bar part start=================
})