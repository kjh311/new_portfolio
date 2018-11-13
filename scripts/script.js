$( document ).ready(function() {
    console.log( "ready!" );







 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar-brand").style.fontSize = "25px";
    document.getElementById("navbar-toggler").style.width = "66px";
    document.getElementById("navbar-toggler").style.height = "40px";
    document.getElementById("navbar-toggler-icon").style.height = "30px";
    document.getElementById("navbar-toggler-icon").style.height = "30px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-brand").style.fontSize = "35px";
    document.getElementById("navbar-toggler").style.width = "80px";
    document.getElementById("navbar-toggler").style.height = "55px";
    document.getElementById("navbar-toggler-icon").style.height = "40px";
    document.getElementById("navbar-toggler-icon").style.height = "40px";
  }
}







// Collapse navbar dropdown on click
 $(function(){ 
     var navMain = $(".navbar-collapse"); 
     var home = $(".navbar-brand");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
     home.on("click", function () {
         navMain.collapse('hide');
     });
 });

});