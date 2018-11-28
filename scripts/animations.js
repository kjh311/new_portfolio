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
  about_underline.delay( 0 );
about_underline.duration( 0.3 );

// Fast Trait timeline
	var fast_trait = new TimelineMax();

	fast_trait.from($(".fast-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".fast-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".traits",	

  })
		.setTween(fast_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  fast_trait.delay( 0 );
fast_trait.duration( 2 );

// Responsive Trait timeline
	var responsive_trait = new TimelineMax();

	responsive_trait.from($(".responsive-trait"), .33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".responsive-trait"), .3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".traits",	

  })
		.setTween(responsive_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  responsive_trait.delay( 0.05 );
responsive_trait.duration( 2 );

// Intuitive Trait timeline
	var intuitive_trait = new TimelineMax();

	intuitive_trait.from($(".intuitive-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".intuitive-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".traits",	

  })
		.setTween(intuitive_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  intuitive_trait.delay( 0.1 );
intuitive_trait.duration( 2 );

// Dynamic Trait timeline
	var dynamic_trait = new TimelineMax();

	dynamic_trait.from($(".dynamic-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale:0})
	.to($(".dynamic-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".traits",	

  })
		.setTween(dynamic_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  dynamic_trait.delay( 0.15 );
dynamic_trait.duration( 2 );

// Pic Wrapper timeline
	var pic_wrapper = new TimelineMax();

	pic_wrapper.from($(".pic-wrapper"), 0.33, {ease: Power3.easeOut, x: '-=600', alpha:0, scale: 0})
	.to($(".pic-wrapper"), 0.3, {ease: Power0.easeNone, x: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(pic_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  pic_wrapper.delay( 0 );
pic_wrapper.duration( 2 );

// Strengths Wrapper timeline
	var strengths_wrapper = new TimelineMax();

	strengths_wrapper.from($(".strengths-wrapper"), 0.33, {ease: Power3.easeOut, x: '+=600', alpha:0, scale: 0})
	.to($(".strengths-wrapper"), 0.3, {ease: Power0.easeNone, x: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(strengths_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  strengths_wrapper.delay( 0 );
strengths_wrapper.duration( 2 );


});