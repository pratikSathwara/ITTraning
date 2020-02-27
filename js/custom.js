function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
$('.menu li a').click(function () {
  $('#myNav').css("height", "0%");
});
$(document).ready(function () {
  $(document).mouseup(function(e) 
  {
    var container = $("#search_ip");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  $(".fa-search").click(function () {
    $("#search_ip").toggle();
  });
});
$(document).ready(function() {
  $(".tab").click(function () {
    $(".menu li").removeClass("active");
    $(this).addClass("active");   
    });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.navbar').addClass("sticky");
    $('.navbar').css({"background-color": "#fff", "transition": "0.5s all"});
    // $('.menu li a').css({"color":"#333"});
    // $('.logo').css({"width":"140px"});
 
  } else {
    $('.navbar').removeClass("sticky");
    $('.navbar').css({"background-color": "transparent"});  
     // $('.menu li a').css({"color":"#fff"});
    // $('.logo').css({"width":"150px"});
  }
});


$(document).ready(function () {
  $('.owl-one').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
  });
});
});
