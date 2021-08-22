$(document).ready(function () {
  // console.log( "ready!" );

  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  // window.onscroll = function() {scrollFunction()};

  //NAVBAR GROW ON SCROLL
  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("navbar").style.padding = "5px 10px";
  //     document.getElementById("navbar-brand").style.fontSize = "25px";
  //     document.getElementById("navbar-toggler").style.width = "66px";
  //     document.getElementById("navbar-toggler").style.height = "40px";
  //     document.getElementById("navbar-toggler-icon").style.height = "30px";
  //     document.getElementById("navbar-toggler-icon").style.height = "30px";
  //   } else {
  //     document.getElementById("navbar").style.padding = "20px 10px";
  //     document.getElementById("navbar-brand").style.fontSize = "35px";
  //     document.getElementById("navbar-toggler").style.width = "80px";
  //     document.getElementById("navbar-toggler").style.height = "55px";
  //     document.getElementById("navbar-toggler-icon").style.height = "40px";
  //     document.getElementById("navbar-toggler-icon").style.height = "40px";
  //   }
  // }

  // var position = $(window).scrollTop();

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > position) {
  //     // console.log("scrolling downwards");
  //        document.getElementById("navbar").style.padding = "5px 10px";
  //     document.getElementById("navbar-brand").style.fontSize = "25px";
  //     document.getElementById("navbar-toggler").style.width = "66px";
  //     document.getElementById("navbar-toggler").style.height = "40px";
  //     document.getElementById("navbar-toggler-icon").style.height = "30px";
  //     document.getElementById("navbar-toggler-icon").style.height = "30px";

  //   } else {
  //     // console.log("scrolling upwards");

  //             document.getElementById("navbar").style.padding = "20px 10px";
  //     document.getElementById("navbar-brand").style.fontSize = "35px";
  //     document.getElementById("navbar-toggler").style.width = "80px";
  //     document.getElementById("navbar-toggler").style.height = "55px";
  //     document.getElementById("navbar-toggler-icon").style.height = "40px";
  //     document.getElementById("navbar-toggler-icon").style.height = "40px";
  //   }
  //   position = scroll;
  // });

  // CHANGE ACTIVE CLASS BY LINK
  // $(".navbar-brand").click(function(){
  // 	$(".navbar-brand").addClass("active");
  // 	$(".nav-projects").removeClass("active");
  // 	$(".nav-interests").removeClass("active");
  // 	$(".nav-about").removeClass("active");
  // 	$(".nav-contact").removeClass("active");
  // });
  // $(".nav-about").click(function(){
  // 	$(".nav-about").addClass("active");
  // 	$(".nav-projects").removeClass("active");
  // 	$(".nav-interests").removeClass("active");
  // 	$(".navbar-brand").removeClass("active");
  // 	$(".nav-contact").removeClass("active");
  // });
  // $(".nav-projects").click(function(){
  // 	$(".nav-projects").addClass("active");
  // 	$(".nav-about").removeClass("active");
  // 	$(".nav-interests").removeClass("active");
  // 	$(".navbar-brand").removeClass("active");
  // 	$(".nav-contact").removeClass("active");
  // });
  // $(".nav-interests").click(function(){
  // 	$(".nav-interests").addClass("active");
  // 	$(".nav-about").removeClass("active");
  // 	$(".nav-projects").removeClass("active");
  // 	$(".navbar-brand").removeClass("active");
  // 	$(".nav-contact").removeClass("active");
  // });
  // $(".nav-contact").click(function(){
  // 	$(".nav-contact").addClass("active");
  // 	$(".nav-about").removeClass("active");
  // 	$(".nav-projects").removeClass("active");
  // 	$(".navbar-brand").removeClass("active");
  // 	$(".nav-interests").removeClass("active");
  // });

  // rotate arrow on button hover (intro container)
  $(".view-my-work").hover(function () {
    $(".fa-arrow-down").addClass("down").removeClass("right");
  });

  $(".view-my-work").mouseleave(function () {
    $(".fa-arrow-down").addClass("right").removeClass("down");
  });

  // Collapse navbar dropdown on click
  $(function () {
    var navMain = $(".navbar-collapse");
    var home = $(".navbar-brand");
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
    home.on("click", function () {
      navMain.collapse("hide");
    });
  });

  // Change Z-index of project links

  // TEMPLE
  $(".project-temple").mouseover(function () {
    $(".project-img-temple").addClass("hidden");
    $(".learn-more-button-temple")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-temple")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-temple").mouseleave(function () {
    $(".project-img-temple").removeClass("hidden");
    $(".learn-more-button-temple")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-temple")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // PAULA DANZIGER
  $(".project-paula").mouseover(function () {
    $(".project-img-paula").addClass("hidden");
    $(".learn-more-button-paula")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-paula")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-paula").mouseleave(function () {
    $(".project-img-paula").removeClass("hidden");
    $(".learn-more-button-paula")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-paula")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // BROOKS
  $(".project-brooks").mouseover(function () {
    $(".project-img-brooks").addClass("hidden");
    $(".learn-more-button-brooks")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-brooks")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-brooks").mouseleave(function () {
    $(".project-img-brooks").removeClass("hidden");
    $(".learn-more-button-brooks")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-brooks")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // MOVIE BUDDY
  $(".project-movie").mouseover(function () {
    $(".project-img-movie").addClass("hidden");
    $(".learn-more-button-movie")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-movie")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-movie").mouseleave(function () {
    $(".project-img-movie").removeClass("hidden");
    $(".learn-more-button-movie")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-movie")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // GAME OF THRONES
  $(".project-thrones").mouseover(function () {
    $(".project-img-thrones").addClass("hidden");
    $(".learn-more-button-thrones")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-thrones")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-thrones").mouseleave(function () {
    $(".project-img-thrones").removeClass("hidden");
    $(".learn-more-button-thrones")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-thrones")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // HTML EMAIL
  $(".project-email").mouseover(function () {
    $(".project-img-email").addClass("hidden");
    $(".learn-more-button-email")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-email")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-email").mouseleave(function () {
    $(".project-img-email").removeClass("hidden");
    $(".learn-more-button-email")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-email")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // SVG ANIMATION
  $(".project-svg").mouseover(function () {
    $(".project-img-svg").addClass("hidden");
    $(".learn-more-button-svg")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".project-title-svg")
      .removeClass("project-title-deactive")
      .addClass("project-title-active");
  });
  $(".project-svg").mouseleave(function () {
    $(".project-img-svg").removeClass("hidden");
    $(".learn-more-button-svg")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".project-title-svg")
      .removeClass("project-title-active")
      .addClass("project-title-deactive");
  });

  // Change Z-index of Interests links

  // ART
  $(".interest-art").mouseover(function () {
    $(".interests-img-art").addClass("hidden");
    $(".learn-more-button-art")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".interests-title-art")
      .removeClass("interests-title-deactive")
      .addClass("interests-title-active");
  });
  $(".interest-art").mouseleave(function () {
    $(".interests-img-art").removeClass("hidden");
    $(".learn-more-button-art")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".interests-title-art")
      .removeClass("interests-title-active")
      .addClass("interests-title-deactive");
  });

  // ANIMATION
  $(".interest-animation").mouseover(function () {
    $(".interests-img-animation").addClass("hidden");
    $(".learn-more-button-animation")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".interests-title-animation")
      .removeClass("interests-title-deactive")
      .addClass("interests-title-active");
  });
  $(".interest-animation").mouseleave(function () {
    $(".interests-img-animation").removeClass("hidden");
    $(".learn-more-button-animation")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".interests-title-animation")
      .removeClass("interests-title-active")
      .addClass("interests-title-deactive");
  });

  // TRAVEL
  $(".interest-travel").mouseover(function () {
    $(".interests-img-travel").addClass("hidden");
    $(".learn-more-button-travel")
      .removeClass("learn-more-deactive")
      .addClass("learn-more-active");
    $(".interests-title-travel")
      .removeClass("interests-title-deactive")
      .addClass("interests-title-active");
  });
  $(".interest-travel").mouseleave(function () {
    $(".interests-img-travel").removeClass("hidden");
    $(".learn-more-button-travel")
      .removeClass("learn-more-active")
      .addClass("learn-more-deactive");
    $(".interests-title-travel")
      .removeClass("interests-title-active")
      .addClass("interests-title-deactive");
  });
});
