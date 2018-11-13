$( document ).ready(function() {
    console.log( "ready!" );

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