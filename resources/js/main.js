$(document).ready(function(){
    //Sticky Menu(Services-section)
    $(".js--Services-Section").waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("sticky");
           }else{
               
           $("nav").removeClass("sticky");
               
           }
    });
    
    //Mixitup(Portfolio-section)
    var mixer = mixitup('.container');

    //Smooth scrool for ie edge safari
    $("a").on("click",function(event){
      if(this.hash !== ""){
      event.preventDefault();
      var hash=this.hash;
      $("html, body").animate({
      scrollTop:$(hash).offset().top},800,function(){
      window.location.hash=hash;
    });
  }
});


// Menu Toggler

    $('.nav-toggler').click(function(){
        $('.main-nav').fadeToggle(300);
    });

// Testimonial carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      smartSpeed:450,
      autoplay:true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
      }
    })
  })

});