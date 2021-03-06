$(window).on("load",function(){
  $(".loader .inner").fadeOut(700,function() {
    $(".loader").fadeOut(950)
  });

  var tallestBox = 0;
  $(".item").each(function() {
    var divHeight = $(this).height();

    if (divHeight > tallestBox){
      tallestBox = divHeight;
    }
  });
  // Apply height & add total vertical padding
  $(".item").css("height", tallestBox+10);


  $(".items").isotope({
    filter:'*',
    animationOptions:{
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });


});


$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 4000
  });






  $('.owl-carousel').owlCarousel({
      loop:true,
      items:4,
      autoplay:true,
      autoplaySpeed:800,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          }
      }
  });

    var skillsTopOffset= $(".skillsection").offset().top;
    $(window).scroll(function(){
      if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
        $('.chart').easyPieChart({
          barColor: function (percent) {
       return (percent < 50 ? '#cb3935' : percent < 85 ? '#f0ad4e' : '#006400');
    },

                easing: 'easeInOut',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size:152,
                onStep: function(from,to,percent){
                  $(this.el).find('.percent').text(Math.round(percent)); }

        });
      }

    });


    $("[data-facncybox]").fancybox();



    $("#filters a").click(function(){
      $("#filters .current").removeClass("current");
      $(this).addClass("current");
      var selector = $(this).attr("data-filter");
      $(".items").isotope({
        filter:selector,
        animationOptions:{
          duration: 2500,
          easing: 'linear',
          queue: false
        }
      });

      return false;

    });

    $("#navigation li a").click(function(e) {
		e.preventDefault();
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

    const nav=$("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    function stickyNavigation(){

      var body = $("body");
      if($(window).scrollTop() >= navTop){
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
      }
      else{
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
      }


    }

});
