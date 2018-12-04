$( document ).ready(function() {
    // alert( "ready!" );



var controller = new ScrollMagic.Controller({
    triggerHook: "onLeave"
        //reverse: false // see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
   }); // Main scrollmagic controller for project


// About timeline
if ($(window).width() > 767) {
  	var about = new TimelineMax();

	about.from($(".about-header-text"), 0.33, {ease: Power0.easeNone, x: '-=70px', alpha:0})
	.to($(".about-header-text"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-container",	

  })
		.setTween(about)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
about.duration( 0.3 );
}



// About Underline timeline
if ($(window).width() > 767) {
	var about_underline = new TimelineMax();

	about_underline.from($(".about-underline"), 0.33, {ease: Power2.easeOut, x: '+=300', alpha:0})
	.to($(".about-underline"), 0.3, {ease: Power2.easeOut, x: '0', alpha:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-container",	

  })
		.setTween(about_underline)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  about_underline.delay( .1 );
about_underline.duration( 1.5 );
}


// Fast Trait timeline
if ($(window).width() > 767) {
	var fast_trait = new TimelineMax();

	fast_trait.from($(".fast-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".fast-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-underline",	

  })
		.setTween(fast_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  fast_trait.delay( 0 );
  fast_trait.duration( 2 );
}


// Responsive Trait timeline
if ($(window).width() > 767) {
	var responsive_trait = new TimelineMax();

	responsive_trait.from($(".responsive-trait"), .33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".responsive-trait"), .3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-underline",	

  })
		.setTween(responsive_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  responsive_trait.delay( 0.05 );
responsive_trait.duration( 2 );
}


// Intuitive Trait timeline
if ($(window).width() > 767) {
	var intuitive_trait = new TimelineMax();

	intuitive_trait.from($(".intuitive-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale: 0})
	.to($(".intuitive-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale: 1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-underline",	

  })
		.setTween(intuitive_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  intuitive_trait.delay( 0.1 );
intuitive_trait.duration( 2 );
}


// Dynamic Trait timeline
if ($(window).width() > 767) {
	var dynamic_trait = new TimelineMax();

	dynamic_trait.from($(".dynamic-trait"), 0.33, {ease: Expo.easeOut, y: '+=300', alpha:0, scale:0})
	.to($(".dynamic-trait"), 0.3, {ease: Power0.easeNone, y: '0', alpha:1, scale:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".about-underline",	

  })
		.setTween(dynamic_trait)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
	dynamic_trait.delay( 0.15 );
	dynamic_trait.duration( 2 );
}


// Pic Wrapper timeline
if ($(window).width() > 767) {
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
}


// Strengths Wrapper timeline
if ($(window).width() > 767) {
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
}


// HTML bar
	var html_wrapper = new TimelineMax();

	html_wrapper.from($(".animated-bar-html"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-html"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(html_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.html#reverse
  ;
  html_wrapper.delay( .2 );
html_wrapper.duration( 3 );


// CSS bar
	var css_wrapper = new TimelineMax();

	css_wrapper.from($(".animated-bar-css"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-css"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(css_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.css#reverse
  ;
  css_wrapper.delay( .22 );
css_wrapper.duration( 3 );


// Javascript bar
	var javascript_wrapper = new TimelineMax();

	javascript_wrapper.from($(".animated-bar-javascript"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-javascript"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(javascript_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.javascript#reverse
  ;
  javascript_wrapper.delay( .24 );
javascript_wrapper.duration( 3 );


// angular bar
	var angular_wrapper = new TimelineMax();

	angular_wrapper.from($(".animated-bar-angular"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-angular"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(angular_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.angular#reverse
  ;
  angular_wrapper.delay( .26 );
angular_wrapper.duration( 3 );


// node bar
	var node_wrapper = new TimelineMax();

	node_wrapper.from($(".animated-bar-node"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-node"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(node_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.node#reverse
  ;
  node_wrapper.delay( .28 );
node_wrapper.duration( 3 );


// photoshop bar
	var photoshop_wrapper = new TimelineMax();

	photoshop_wrapper.from($(".animated-bar-photoshop"), 0.33, {ease: Power3.easeOut, scaleX:0, transformOrigin:"left"})
	.to($(".animated-bar-photoshop"), 0.3, {ease: Power0.easeNone, scaleX:1});

	//  scene
	var scene = new ScrollMagic.Scene({	
    triggerElement: ".pic-strengths",	

  })
		.setTween(photoshop_wrapper)
		.addTo(controller)
   scene.reverse(false)  //only in this scene - see: http://scrollmagic.io/docs/ScrollMagic.Scene.photoshop#reverse
  ;
  photoshop_wrapper.delay( .3 );
photoshop_wrapper.duration( 3 );


});