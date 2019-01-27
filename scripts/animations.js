$( document ).ready(function() {




var controller = new ScrollMagic.Controller({
    triggerHook: "onLeave"
        
   }); 


// ACTIVE LINKS
// new ScrollMagic.Scene({triggerElement: ".about-container"})
// 	.setClassToggle(".nav-item-about", "active")
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: ".projects-container"})
// 	.setClassToggle(".nav-item-projects", "active")
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: ".interests-container"})
// 	.setClassToggle(".nav-item-interests", "active")
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: ".contact-container"})
// 	.setClassToggle(".nav-item-contact", "active")
// 	.addTo(controller);


	// 	var scrollPosition = $(document).scrollTop();
	// 	$('.navbar a').each(function () {
	// 		var currentLink = $(this);
	// 		var refElement = $(currentLink.attr("href"));
	// 		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
	// 			$('.navbar ul li a').removeClass("active");
	// 			currentLink.addClass("active");
	// 		}
	// 		else{
	// 			currentLink.removeClass("active");
	// 		}
	// 	});
	// }



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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false)  
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
   scene.reverse(false) 
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
   scene.reverse(false)  
  ;
  photoshop_wrapper.delay( .3 );
photoshop_wrapper.duration( 3 );


// PROJECTS
if ($(window).width() > 767) {
  	var projects = new TimelineMax();

	projects.from($(".projects-header-text"), 0.33, {ease: Power0.easeNone, x: '-=70px', alpha:0})
	.to($(".projects-header-text"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects-container",	

  })
		.setTween(projects)
		.addTo(controller)
   scene.reverse(false)  
  ;
projects.duration( 0.3 );
}



// projects Underline timeline
if ($(window).width() > 767) {
	var projects_underline = new TimelineMax();

	projects_underline.from($(".projects-underline"), 0.33, {ease: Power2.easeOut, x: '+=300', alpha:0})
	.to($(".projects-underline"), 0.3, {ease: Power2.easeOut, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects-container",	

  })
		.setTween(projects_underline)
		.addTo(controller)
   scene.reverse(false)  
  ;
  projects_underline.delay( .1 );
projects_underline.duration( 1.5 );
}

// technologies
if ($(window).width() > 767) {
	var technologies = new TimelineMax();

	technologies.from($(".technologies-li"), 0.33, {alpha:0})
	.to($(".technologies-li"), 0.3, {alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects-container",	

  })
		.setTween(technologies)
		.addTo(controller)
   scene.reverse(false)  
  ;
  technologies.delay( .1 );
technologies.duration( 1.5 );
}


// BROOKS PROJECT
if ($(window).width() > 767) {
	var brooks = new TimelineMax();

	brooks.from($(".project-brooks"), 0.33, {alpha:0})
	.to($(".project-brooks"), 0.3, {alpha:1});


	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects",	

  })
		.setTween(brooks)
		.addTo(controller)
   scene.reverse(false)  
  ;
  brooks.delay( .1 );
brooks.duration( 1.5 );
}

// MOVIE PROJECT
if ($(window).width() > 767) {
	var movie = new TimelineMax();

	movie.from($(".project-movie"), 0.33, {alpha:0})
	.to($(".project-movie"), 0.3, {alpha:1});


	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects",	

  })
		.setTween(movie)
		.addTo(controller)
   scene.reverse(false)  
  ;
  movie.delay( .15 );
movie.duration( 1.5 );
}

// THRONES PROJECT
if ($(window).width() > 767) {
	var thrones = new TimelineMax();

	thrones.from($(".project-thrones"), 0.33, {alpha:0})
	.to($(".project-thrones"), 0.3, {alpha:1});


	var scene = new ScrollMagic.Scene({	
    triggerElement: ".projects",	

  })
		.setTween(thrones)
		.addTo(controller)
   scene.reverse(false)  
  ;
  thrones.delay( .2 );
thrones.duration( 1.5 );
}


// INTERESTS
if ($(window).width() > 767) {
  	var interests = new TimelineMax();

	interests.from($(".interests-header"), 0.33, {ease: Power0.easeNone, x: '-=70px', alpha:0})
	.to($(".interests-header"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".interests-container",	

  })
		.setTween(interests)
		.addTo(controller)
   scene.reverse(false)  
  ;
interests.duration( 0.3 );
}



// Interests Underline timeline
if ($(window).width() > 767) {
	var interests_underline = new TimelineMax();

	interests_underline.from($(".interests-underline"), 0.33, {ease: Power2.easeOut, x: '+=300', alpha:0})
	.to($(".interests-underline"), 0.3, {ease: Power2.easeOut, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".interests-container",	

  })
		.setTween(interests_underline)
		.addTo(controller)
   scene.reverse(false)  
  ;
  interests_underline.delay( .1 );
interests_underline.duration( 1.5 );
}

// interest art
if ($(window).width() > 767) {
	var art = new TimelineMax();

	art.from($(".interest-art"), 0.33, {alpha:0})
	.to($(".interest-art"), 0.3, {alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".interests",	

  })
		.setTween(art)
		.addTo(controller)
   scene.reverse(false)  
  ;
  art.delay( .1 );
art.duration( 1.5 );
}

// interest Animation
if ($(window).width() > 767) {
	var animation = new TimelineMax();

	animation.from($(".interest-animation"), 0.33, {alpha:0})
	.to($(".interest-animation"), 0.3, {alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".interests",	

  })
		.setTween(animation)
		.addTo(controller)
   scene.reverse(false)  
  ;
  animation.delay( .15 );
animation.duration( 1.5 );
}

// interest TRAVEL
if ($(window).width() > 767) {
	var travel = new TimelineMax();

	travel.from($(".interest-travel"), 0.33, {alpha:0})
	.to($(".interest-travel"), 0.3, {alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".interests",	

  })
		.setTween(travel)
		.addTo(controller)
   scene.reverse(false)  
  ;
  travel.delay( .2 );
travel.duration( 1.5 );
}

// CONTACT
if ($(window).width() > 767) {
  	var contact = new TimelineMax();

	contact.from($(".contact-header"), 0.33, {ease: Power0.easeNone, x: '-=70px', alpha:0})
	.to($(".contact-header"), 0.1, {ease: Power0.easeNone, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".contact-container",	

  })
		.setTween(contact)
		.addTo(controller)
   scene.reverse(false)  
  ;
contact.duration( 0.3 );
}



// Contact Underline timeline
if ($(window).width() > 767) {
	var contact_underline = new TimelineMax();

	contact_underline.from($(".contact-underline"), 0.33, {ease: Power2.easeOut, x: '+=300', alpha:0})
	.to($(".contact-underline"), 0.3, {ease: Power2.easeOut, x: '0', alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".contact-container",	

  })
		.setTween(contact_underline)
		.addTo(controller)
   scene.reverse(false)  
  ;
  contact_underline.delay( .1 );
contact_underline.duration( 1.5 );
}


// Phone
if ($(window).width() > 767) {
	var phone = new TimelineMax();

	phone.from($(".phone"), 0.33, {alpha:0})
	.to($(".phone"), 0.3, {alpha:1});

	// 	phone.call(function() {
 //    //addClass, toggleClass, or your custom logic.  
 //    	$('.phone-li').addClass("tracking-in-expand-fwd");
	// }, null, null, 2);

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".contact-underline",	

  })
		.setTween(phone)
		.addTo(controller)
   scene.reverse(false)  
  ;
  phone.delay( .1 );
phone.duration( 1.5 );
}

// RESUME
if ($(window).width() > 767) {
	var resume = new TimelineMax();

	resume.from($(".resume"), 0.33, {alpha:0})
	.to($(".resume"), 0.3, {alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".phone",	

  })
		.setTween(resume)
		.addTo(controller)
   scene.reverse(false)  
  ;
  resume.delay( .1 );
resume.duration( 1.5 );
}


// EMAIL ICON
if ($(window).width() > 767) {
	var email = new TimelineMax();

	email.from($(".fa-envelope-square"), 0.33, { alpha:0 })
	.to($(".fa-envelope-square"), 0.3, {  alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".phone",	

  })
		.setTween(email)
		.addTo(controller)
   scene.reverse(false)  
  ;
  email.delay( .3 );
email.duration( .5 );
}

// LINKEDIN ICON
if ($(window).width() > 767) {
	var linkedin = new TimelineMax();

	linkedin.from($(".fa-linkedin"), 0.33, { alpha:0})
	.to($(".fa-linkedin"), 0.3, { alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".phone",	

  })
		.setTween(linkedin)
		.addTo(controller)
   scene.reverse(false)  
  ;
  linkedin.delay( .5 );
linkedin.duration( .5 );
}

// GITHUB ICON
if ($(window).width() > 767) {
	var gitub = new TimelineMax();

	gitub.from($(".fa-github-square"), 0.33, {  alpha:0})
	.to($(".fa-github-square"), 0.3, { alpha:1});

	var scene = new ScrollMagic.Scene({	
    triggerElement: ".phone",	

  })
		.setTween(gitub)
		.addTo(controller)
   scene.reverse(false)  
  ;
  gitub.delay( .7 );
gitub.duration( .5 );
}


});