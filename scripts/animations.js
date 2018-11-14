$( document ).ready(function() {
    // alert( "ready!" );


   //  var tl = new TimelineMax();
   //  tl.pause();

   //   tl.from('.nav-about', 0.5, {x:-100});


   //  // var navMain = ;
   //  $(".navbar-toggler").click(function(){
         
   //  	 if ($(".navbar-toggler").hasClass("collapsed")) {
			//   // Closed
			//   // alert("closed")
			//   tl.reverse()
			//   // tl.pause()
			//   // tl.time(0)
			//   // tl.pause()
			// } else {
			//   // Open
			//   tl.paused(!tl.paused())
			//   // tl.restart();
			//   // alert("open")
			// }

   //   });

   // var aboutTl = new TimelineMax();

   // // tl.pause();

   // aboutTl.from('.about-header-text', 0.7, {x:-200, opacity: 0, delay: 0.4})
   // .from('.about-underline', 0.5, {x:200, opacity: 0, delay: -0.4})


  //  $(window).scroll( function(){
		//   var st = $(this).scrollTop();
		//   var ht = $( '.about-container' ).height();
		//    if( st < ht && st > 0 ){
		//         windowScroll = st/ht;
		//         aboutTl.progress( windowScroll );
		//     }
		// });

   
// INIT SCROLL MAGIC
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
	triggerElement: '.about-header-text'
})

.setClassToggle('.about-header-text', 'about-header-text-animate')
.addTo(controller);


});