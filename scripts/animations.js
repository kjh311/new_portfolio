$( document ).ready(function() {
    // alert( "ready!" );


    var tl = new TimelineMax();
    tl.pause();

     tl.from('.nav-about', 0.5, {x:-100});


    // var navMain = ;
    $(".navbar-toggler").click(function(){
         
    	 if ($(".navbar-toggler").hasClass("collapsed")) {
			  // Closed
			  // alert("closed")
			  // tl.reverse()
			  // tl.pause()
			  tl.time(0)
			  // tl.pause()
			} else {
			  // Open
			  tl.paused(!tl.paused())
			  // tl.restart();
			  // alert("open")
			}

     });

   




});