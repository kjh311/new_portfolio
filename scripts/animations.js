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
// var controller = new ScrollMagic.Controller();

// var ourScene = new ScrollMagic.Scene({
// 	triggerElement: '.about-header-text'
// })

// .setClassToggle('.about-header-text', 'about-header-text-animate')
// .addTo(controller);
// init
// var ctrl = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// });
 
// // Create scene
// $("section").each(function() {
   
//     new ScrollMagic.Scene({
//         triggerElement: this,
//         duration: '50%'
//     })
//     .setPin(this)
//     .addTo(ctrl);
// });


// Controller
// var controller = new ScrollMagic();
 
// // 2. Curtain Timeline
// // var tl = new TimelineMax();
// //     tl.set(".about-header-text", {xPercent: -100})
// //     .to(".about-header-text", 0.3, {xPercent: 0, ease:Power4.easeOut})
//     // .to([tomatoLeft2, tomatoLeaves2, tomatoRight2, letters2, bracketRight2, bracketLeft2], 0.01, {fill: "#707070"})
//     // .to(".about-header-text", 0.3, {yPercent: -100, ease:Power4.easeOut})
 
// // 2. Curtain Scene
// var scene = new ScrollScene({triggerElement: ".about-header-text"})
//     .addTo(controller)
//     .setTween(tl);

// var tl = TweenMax.from($".about-header-text", 1, {
//     yPercent: 50,
//     xPercent: 100,
//     ease: Cubic.easeOut
// });


var controller = new ScrollMagic.Controller();

// 
 


// var fromLeftTimeline = new TimelineMax();
// var fromLeftFrom = TweenMax.from(".about-header-text", 1, {
//     x: 500
// });
// var fromLeftTo = TweenMax.to(".about-header-text", 1, {
//     x: 0
// });
// fromLeftTimeline
//     .add(fromLeftFrom)
//     .add(fromLeftTo);

//     new ScrollMagic.Scene({
//         triggerElement: ".about-header-text"
// //         // triggerHook: "onLeave",
//     })
//     // .setPin("#slidein")
//     //.addIndicators() // add indicators (requires plugin)
//     .addTo(controller);


// Fade in
// var fadeInTimeline = new TimelineMax();
// var fadeInFrom = TweenMax.from(".about-header-text", 1, {
//     autoAlpha: 0
// });
// var fadeInTo = TweenMax.to(".about-header-text", 1, {
//     autoAlpha: 1,
//     // fadeInTimeline.pause();
// });
// fadeInTimeline
//     .add(fadeInFrom)
//     .add(fadeInTo);
 
// new ScrollMagic.Scene({
//         triggerElement: ".about-header-text",
//         // offset: 200,
//     })
//     .setTween(fadeInTimeline)
//     .duration(400)
//     //    .reverse(false)
//     //.addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
 

// var tl = new TimelineLite({
// 	// paused: true,
//   delay: 0.5,
//   onComplete: function() {
//     // alert('Done!');
//   }
// });
// tl.add(TweenLite.set($(".about-header-text"), {opacity: 0, x: -50}));
// tl.add(TweenLite.to($(".about-header-text"), 0.5, {opacity: 1, x: 0, ease: Back.easeIn}));
// tl.add(TweenLite.to($(".about-header-text"), 1, {x: 300, rotation: 180, ease: Power1.easeInOut}), 0);
// tl.add(TweenLite.to($(".about-header-text"), 0.5, {scaleY: -1}), 0.25);
// tl.add(TweenLite.to($(".about-header-text"), 0.5, {scaleX: -1}), 0.5);


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".about-header-text", duration: 100})
					// animate color and top border in relation to scroll position
					.setTween(".about-header-text", {opacity: 1, x: 50}) // the tween durtion can be omitted and defaults to 1
					// .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
					// scene.pause();

					.addTo(controller);


});