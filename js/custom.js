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
});
// $(window).scroll(function () {
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
// });

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
    $('.navbar').css({"background-color": "#fff"});  
     // $('.menu li a').css({"color":"#fff"});
    // $('.logo').css({"width":"150px"});
  }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll_btn").style.display = "block";
  } else {
    document.getElementById("scroll_btn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
$(document).ready(function() {
    $("#scroll_btn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

}); 
$(document).ready(function () {
  $('.owl-two').owlCarousel({
    items:1,
    margin:30,
    padding:30,
    stagePadding:30,
    smartSpeed:450,
    loop:true,
    nav:false,
    dots: true
});
});


