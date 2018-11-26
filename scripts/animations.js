$( document ).ready(function() {
    // alert( "ready!" );



var controller = new ScrollMagic.Controller({
    triggerHook: "onLeave"
        //reverse: false // see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
   }); // Main scrollmagic controller for project


  

// About timeline
	var about = new TimelineMax();

	about.from($(".about-header-text"), 0.33, {ease: Power0.easeNone, x: '-=70px', alpha:0})
	.to($(".about-header-text"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-header-text",	

  })
		.setTween(about)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
about.duration( 0.3 );



// About Underline timeline
	var about_underline = new TimelineMax();

	about_underline.from($(".about-underline"), 0.33, {ease: Power0.easeNone, x: '+=100px', alpha:0})
	.to($(".about-underline"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-header-text",	

  })
		.setTween(about_underline)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  about_underline.delay( 0.3 );
about_underline.duration( 0.3 );

});