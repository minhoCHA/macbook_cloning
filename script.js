// START INTRO SECTION
// define images
var images = [
    "Assets/images/sequence_images/large_0001.jpg",
    "Assets/images/sequence_images/large_0002.jpg",
    "Assets/images/sequence_images/large_0003.jpg",
    "Assets/images/sequence_images/large_0004.jpg",
    "Assets/images/sequence_images/large_0005.jpg",
    "Assets/images/sequence_images/large_0006.jpg",
    "Assets/images/sequence_images/large_0007.jpg",
    "Assets/images/sequence_images/large_0008.jpg",
    "Assets/images/sequence_images/large_0009.jpg",
    "Assets/images/sequence_images/large_0010.jpg",
    "Assets/images/sequence_images/large_0011.jpg",
    "Assets/images/sequence_images/large_0012.jpg",
    "Assets/images/sequence_images/large_0013.jpg",
    "Assets/images/sequence_images/large_0014.jpg",
    "Assets/images/sequence_images/large_0015.jpg",
    "Assets/images/sequence_images/large_0016.jpg",
    "Assets/images/sequence_images/large_0017.jpg",
    "Assets/images/sequence_images/large_0018.jpg",
    "Assets/images/sequence_images/large_0019.jpg",
    "Assets/images/sequence_images/large_0020.jpg",
    "Assets/images/sequence_images/large_0021.jpg",
    "Assets/images/sequence_images/large_0022.jpg",
    "Assets/images/sequence_images/large_0023.jpg",
    "Assets/images/sequence_images/large_0024.jpg",
    "Assets/images/sequence_images/large_0025.jpg",
    "Assets/images/sequence_images/large_0026.jpg",
    "Assets/images/sequence_images/large_0027.jpg",
    "Assets/images/sequence_images/large_0028.jpg",
    "Assets/images/sequence_images/large_0029.jpg",
    "Assets/images/sequence_images/large_0030.jpg",
    "Assets/images/sequence_images/large_0031.jpg",
    "Assets/images/sequence_images/large_0032.jpg",
    "Assets/images/sequence_images/large_0033.jpg",
    "Assets/images/sequence_images/large_0034.jpg",
    "Assets/images/sequence_images/large_0035.jpg",
    "Assets/images/sequence_images/large_0036.jpg",
    "Assets/images/sequence_images/large_0037.jpg",
    "Assets/images/sequence_images/large_0038.jpg",
    "Assets/images/sequence_images/large_0039.jpg",
    "Assets/images/sequence_images/large_0040.jpg",
    "Assets/images/sequence_images/large_0041.jpg",
    "Assets/images/sequence_images/large_0042.jpg",
    "Assets/images/sequence_images/large_0043.jpg",
    "Assets/images/sequence_images/large_0044.jpg",
    "Assets/images/sequence_images/large_0045.jpg",
    "Assets/images/sequence_images/large_0046.jpg",
    "Assets/images/sequence_images/large_0048.jpg",
    "Assets/images/sequence_images/large_0048.jpg",
    "Assets/images/sequence_images/large_0049.jpg",
    "Assets/images/sequence_images/large_0050.jpg",
    "Assets/images/sequence_images/large_0051.jpg",
    "Assets/images/sequence_images/large_0052.jpg",
    "Assets/images/sequence_images/large_0053.jpg",
    "Assets/images/sequence_images/large_0054.jpg",
    "Assets/images/sequence_images/large_0055.jpg",
    "Assets/images/sequence_images/large_0056.jpg",
    "Assets/images/sequence_images/large_0057.jpg",
    "Assets/images/sequence_images/large_0058.jpg",
    "Assets/images/sequence_images/large_0059.jpg",
    "Assets/images/sequence_images/large_0060.jpg",
    "Assets/images/sequence_images/large_0061.jpg",
    "Assets/images/sequence_images/large_0062.jpg",
    "Assets/images/sequence_images/large_0063.jpg",
    "Assets/images/sequence_images/large_0064.jpg",
    "Assets/images/sequence_images/large_0065.jpg",
    "Assets/images/sequence_images/large_0066.jpg",
    "Assets/images/sequence_images/large_0067.jpg",
    "Assets/images/sequence_images/large_0068.jpg",
    "Assets/images/sequence_images/large_0069.jpg",
    "Assets/images/sequence_images/large_0070.jpg",
    "Assets/images/sequence_images/large_0071.jpg",
    "Assets/images/sequence_images/large_0072.jpg",
    "Assets/images/sequence_images/large_0073.jpg",
    "Assets/images/sequence_images/large_0074.jpg",
    "Assets/images/sequence_images/large_0075.jpg",
    "Assets/images/sequence_images/large_0076.jpg",
    "Assets/images/sequence_images/large_0077.jpg",
    "Assets/images/sequence_images/large_0078.jpg",
    "Assets/images/sequence_images/large_0079.jpg",
    "Assets/images/sequence_images/large_0080.jpg",
    "Assets/images/sequence_images/large_0081.jpg",
    "Assets/images/sequence_images/large_0082.jpg",
    "Assets/images/sequence_images/large_0083.jpg",
    "Assets/images/sequence_images/large_0084.jpg",
    "Assets/images/sequence_images/large_0085.jpg",
    "Assets/images/sequence_images/large_0086.jpg",
    "Assets/images/sequence_images/large_0087.jpg",
    "Assets/images/sequence_images/large_0088.jpg",
    "Assets/images/sequence_images/large_0089.jpg",
    "Assets/images/sequence_images/large_0090.jpg",
    "Assets/images/sequence_images/large_0091.jpg",
    "Assets/images/sequence_images/large_0092.jpg",
    "Assets/images/sequence_images/large_0093.jpg",
    "Assets/images/sequence_images/large_0094.jpg",
    "Assets/images/sequence_images/large_0095.jpg",
    "Assets/images/sequence_images/large_0096.jpg",
    "Assets/images/sequence_images/large_0097.jpg",
    "Assets/images/sequence_images/large_0098.jpg",
    "Assets/images/sequence_images/large_0099.jpg",
    "Assets/images/sequence_images/large_0100.jpg",
    "Assets/images/sequence_images/large_0101.jpg",
    "Assets/images/sequence_images/large_0102.jpg",
    "Assets/images/sequence_images/large_0103.jpg",
    "Assets/images/sequence_images/large_0104.jpg",
    "Assets/images/sequence_images/large_0105.jpg",
    "Assets/images/sequence_images/large_0106.jpg",
    "Assets/images/sequence_images/large_0107.jpg",
    "Assets/images/sequence_images/large_0108.jpg",
    "Assets/images/sequence_images/large_0109.jpg",
    "Assets/images/sequence_images/large_0110.jpg",
    "Assets/images/sequence_images/large_0111.jpg",
    "Assets/images/sequence_images/large_0112.jpg",
    "Assets/images/sequence_images/large_0113.jpg",
    "Assets/images/sequence_images/large_0114.jpg",
    "Assets/images/sequence_images/large_0115.jpg",
    "Assets/images/sequence_images/large_0116.jpg",
    "Assets/images/sequence_images/large_0117.jpg",
    "Assets/images/sequence_images/large_0118.jpg",
    "Assets/images/sequence_images/large_0119.jpg",
    "Assets/images/sequence_images/large_0120.jpg",
    "Assets/images/sequence_images/large_0121.jpg",
    "Assets/images/sequence_images/large_0122.jpg",
    "Assets/images/sequence_images/large_0123.jpg",
    "Assets/images/sequence_images/large_0124.jpg",
    "Assets/images/sequence_images/large_0125.jpg",
    "Assets/images/sequence_images/large_0126.jpg",
    "Assets/images/sequence_images/large_0127.jpg",
    "Assets/images/sequence_images/large_0128.jpg",
    "Assets/images/sequence_images/large_0129.jpg",
    "Assets/images/sequence_images/large_0130.jpg",
    "Assets/images/sequence_images/large_0131.jpg",
    "Assets/images/sequence_images/large_0132.jpg",
    "Assets/images/sequence_images/large_0133.jpg",
  ];

const intro = document.querySelector('.div-intro-img');
var controller = new ScrollMagic.Controller(); // init controller
// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = { curImg: 0 };
  
// intro image tween
var main_tween = TweenMax.to(obj, 0.5,
{
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    ease: Linear.easeNone,
    onUpdate: function () {
    $(".section_intro_img_001").attr("src", images[obj.curImg]); // set the image source
    }
}
);
  
// intro scene
var main_scene = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0.1,
duration: 2000
})
.setTween(main_tween)
.setPin(intro)
.addTo(controller);

// the animation to use
const main_header = gsap.timeline({ paused: true });
main_header.to(".component.main .top-element .box", { scale: 1, autoAlpha: 0 });

// The start and end positions in terms of the page scroll
const startY = innerHeight / 10;
const finishDistance = innerHeight / 5;

// Listen to the scroll event
document.addEventListener("scroll", function () {
  // Prevent the update from happening too often (throttle the scroll event)
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
});

update();

function update() {
  // Update our animation
  main_header.progress((scrollY - startY) / finishDistance);

  // Let the scroll event fire again
  requestId = null;
}

// START FEATURE SECTION
const video = document.querySelector('.section.desc').querySelector('video');

// video scene
const scene_feature = new ScrollMagic.Scene({
    duration: 100,
    triggerElement: video,
    offset: 200
  })
    .addTo(controller)
    .on('enter', () => {
      video.play();
    })
  

// feature row tween
var tween_feature_row1 = TweenLite.from('#div-feature-row1 .main-p', 1, { css: { color: "white" }, ease: Back.easeOut });
// build row scene
var scene_feature_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row1",
  duration: 400,
})
  .setTween(tween_feature_row1)
  .addTo(controller);

// feature row tween
var tween_feature_row2 = TweenLite.from('#div-feature-row2 .main-p', 1, { css: { color: "white" }, ease: Back.easeOut });
// build row scene
var scene_feature_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row2",
  duration: 400,
})
  .setTween(tween_feature_row2)
  .addTo(controller);

// feature row tween
var tween_feature_row3 = TweenLite.from('#div-feature-row3 .main-p', 1, { css: { color: "white" }, ease: Back.easeOut });
// build row scene
var scene_feature_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row3",
  duration: 400,
})
  .setTween(tween_feature_row3)
  .addTo(controller);

var tween_feature_row1_p = TweenLite.from('#div-feature-row1-p', 1, { css: { color: "white" }, ease: Back.easeOut });
// build row scene
var scene_feature_row1_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row1",
  duration: 400,
})
  .setTween(tween_feature_row1_p)
  .addTo(controller);
  

var tween_feature_row2_p = TweenLite.from('#div-feature-row2-p', 1, { css: { color: "white" }, ease: Back.easeOut });

// build row scene
var scene_feature_row2_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row2",
  duration: 400,
})
  .setTween(tween_feature_row2_p)
  .addTo(controller);

var tween_feature_row3_p = TweenLite.from('#div-feature-row3-p', 1, { css: { color: "white" }, ease: Back.easeOut });

// build row scene
var scene_feature_row3_p = new ScrollMagic.Scene({
  triggerElement: "#div-feature-row3",
  duration: 400,
})
  .setTween(tween_feature_row3_p)
  .addTo(controller);



var retina_image1 = TweenLite.to('.section-wiper .image1-cover',  1, {width:2400 });

// build row scene
var scene_retina_image1 = new ScrollMagic.Scene({
  triggerElement: ".section-wiper .image1-cover",
  duration: 1000,
})
  .setTween(retina_image1)
  .addTo(controller);


var scene_retina_p = new ScrollMagic.Scene({
  triggerElement: ".section-wiper .image1",
  triggerHook: 0.2, // show, when scrolled 50% into view
  duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
  .setClassToggle(".section-wiper .info", "visible") // add class to reveal
  .addTo(controller);



function sizeAll() {
  if ( window.innerWidth < 991.98) {
  main_scene.enabled(false);
  } else {
  main_scene.enabled(true);
  }
}

$(window).resize(sizeAll);
sizeAll();


new ScrollMagic.Scene({
  triggerElement: ".image.two",
  triggerHook: 0.3,
  duration: 200,
})
  .setClassToggle(".box-extra", "visible") // add class to reveal
  .addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".image.two",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".section-wiper .image.one .wrapper",{
  pushFollowers: false,
  spacerClass: "scrollmagic-pin-spacer-extra"
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".image.two",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".section-wiper .image.two .wrapper",{
  pushFollowers: false,
  spacerClass: "scrollmagic-pin-spacer-extra"
}).addTo(controller);

var tween_smaller = TweenMax.to(".swiper-figure", 1, {scale:0.5});
	
var pinSceneIntro = new ScrollMagic.Scene({
  triggerElement: '.third',
  triggerHook: 'onEnter',
  duration: '20%',
})
.setTween(tween_smaller)
.setPin(".third")
.addTo(controller);

var tween_smaller2 = TweenMax.to(".swiper-figure .image2", 1, {height:1340});
	
var pinSceneIntro = new ScrollMagic.Scene({
  triggerElement: '.third',
  triggerHook: 'onEnter',
  duration: '20%',
})
.setTween(tween_smaller2)
.addTo(controller);


var tween_color_change = TweenMax.to(".swiper-figure .image3", {opacity: 1});
	
var pinSceneIntro = new ScrollMagic.Scene({
  triggerElement: '.two',
  triggerHook: 1,
  duration: '100%',
})
.setTween(tween_color_change)
.addTo(controller);



var tween_make_phone = TweenMax.to(".section.retina .retina .images-container .image.image-screen-1", {right: 300 });
	
var make_phone = new ScrollMagic.Scene({
  triggerElement: '.images-container',
  triggerHook: 1,
  duration: '10%',
  offset: 500,
})
.setTween(tween_make_phone)
.addTo(controller);


var tween_make_phone2 = TweenMax.to(".section.retina .retina .images-container .image.image-screen-2", {right: 250 });
	
var make_phone2 = new ScrollMagic.Scene({
  triggerElement: '.images-container',
  triggerHook: 1,
  duration: '10%',
  offset: 500,
})
.setTween(tween_make_phone2)
.addTo(controller);


var tween_make_phone3 = TweenMax.to(".section.retina .retina .images-container .image.image-screen-3", {right: 200 });
	
var make_phone3 = new ScrollMagic.Scene({
  triggerElement: '.images-container',
  triggerHook: 1,
  duration: '10%',
  offset: 500,
})
.setTween(tween_make_phone3)
.addTo(controller);

var tween_make_phone4 = TweenMax.to(".section.retina .retina .images-container .image.image-screen-4", {right: 150 });
	
var make_phone4 = new ScrollMagic.Scene({
  triggerElement: '.images-container',
  triggerHook: 1,
  duration: '10%',
  offset: 500,
})
.setTween(tween_make_phone4)
.addTo(controller);




var $videoSrc;  
$('.a-tag').click(function() {
    $videoSrc = $(this).data( "src" );
});
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); })


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 



// $('.playpause').click(function() {
//   console.log('a')
//   var count = 0;

// });
var clicks = 0;
var a = function onClick() {
    clicks += 1;
    if (clicks % 2 !== 0 || (clicks === 1)) {
      $('.playpause').css('background-image', 'url(https://www.freeiconspng.com/uploads/video-play-icon-2.gif)');
    } else {
      $('.playpause').css('background-image', 'url(https://www.freeiconspng.com/uploads/pause-button-png-11.png)');
    }
};






// var images = [
//   "{{ 'large_0001.jpg' | asset_url }}",
//   "{{ 'large_0002.jpg' | asset_url }}",
//   "{{ 'large_0003.jpg' | asset_url }}",
//   "{{ 'large_0004.jpg' | asset_url }}",
//   "{{ 'large_0005.jpg' | asset_url }}",
//   "{{ 'large_0006.jpg' | asset_url }}",
//   "{{ 'large_0007.jpg' | asset_url }}",
//   "{{ 'large_0008.jpg' | asset_url }}",
//   "{{ 'large_0009.jpg' | asset_url }}",
//   "{{ 'large_0010.jpg' | asset_url }}",
//   "{{ 'large_0011.jpg' | asset_url }}",
//   "{{ 'large_0012.jpg' | asset_url }}",
//   "{{ 'large_0013.jpg' | asset_url }}",
//   "{{ 'large_0014.jpg' | asset_url }}",
//   "{{ 'large_0015.jpg' | asset_url }}",
//   "{{ 'large_0016.jpg' | asset_url }}",
//   "{{ 'large_0017.jpg' | asset_url }}",
//   "{{ 'large_0018.jpg' | asset_url }}",
//   "{{ 'large_0019.jpg' | asset_url }}",
//   "{{ 'large_0020.jpg' | asset_url }}",
//   "{{ 'large_0021.jpg' | asset_url }}",
//   "{{ 'large_0022.jpg' | asset_url }}",
//   "{{ 'large_0023.jpg' | asset_url }}",
//   "{{ 'large_0024.jpg' | asset_url }}",
//   "{{ 'large_0025.jpg' | asset_url }}",
//   "{{ 'large_0026.jpg' | asset_url }}",
//   "{{ 'large_0027.jpg' | asset_url }}",
//   "{{ 'large_0028.jpg' | asset_url }}",
//   "{{ 'large_0029.jpg' | asset_url }}",
//   "{{ 'large_0030.jpg' | asset_url }}",
//   "{{ 'large_0031.jpg' | asset_url }}",
//   "{{ 'large_0032.jpg' | asset_url }}",
//   "{{ 'large_0033.jpg' | asset_url }}",
//   "{{ 'large_0034.jpg' | asset_url }}",
//   "{{ 'large_0035.jpg' | asset_url }}",
//   "{{ 'large_0036.jpg' | asset_url }}",
//   "{{ 'large_0037.jpg' | asset_url }}",
//   "{{ 'large_0038.jpg' | asset_url }}",
//   "{{ 'large_0039.jpg' | asset_url }}",
//   "{{ 'large_0040.jpg' | asset_url }}",
//   "{{ 'large_0041.jpg' | asset_url }}",
//   "{{ 'large_0042.jpg' | asset_url }}",
//   "{{ 'large_0043.jpg' | asset_url }}",
//   "{{ 'large_0044.jpg' | asset_url }}",
//   "{{ 'large_0045.jpg' | asset_url }}",
//   "{{ 'large_0046.jpg' | asset_url }}",
//   "{{ 'large_0047.jpg' | asset_url }}",
//   "{{ 'large_0048.jpg' | asset_url }}",
//   "{{ 'large_0049.jpg' | asset_url }}",
//   "{{ 'large_0050.jpg' | asset_url }}",
//   "{{ 'large_0051.jpg' | asset_url }}",
//   "{{ 'large_0052.jpg' | asset_url }}",
//   "{{ 'large_0053.jpg' | asset_url }}",
//   "{{ 'large_0054.jpg' | asset_url }}",
//   "{{ 'large_0055.jpg' | asset_url }}",
//   "{{ 'large_0056.jpg' | asset_url }}",
//   "{{ 'large_0057.jpg' | asset_url }}",
//   "{{ 'large_0058.jpg' | asset_url }}",
//   "{{ 'large_0059.jpg' | asset_url }}",
//   "{{ 'large_0060.jpg' | asset_url }}",
//   "{{ 'large_0061.jpg' | asset_url }}",
//   "{{ 'large_0062.jpg' | asset_url }}",
//   "{{ 'large_0063.jpg' | asset_url }}",
//   "{{ 'large_0064.jpg' | asset_url }}",
//   "{{ 'large_0065.jpg' | asset_url }}",
//   "{{ 'large_0066.jpg' | asset_url }}",
//   "{{ 'large_0067.jpg' | asset_url }}",
//   "{{ 'large_0068.jpg' | asset_url }}",
//   "{{ 'large_0069.jpg' | asset_url }}",
//   "{{ 'large_0070.jpg' | asset_url }}",
//   "{{ 'large_0071.jpg' | asset_url }}",
//   "{{ 'large_0072.jpg' | asset_url }}",
//   "{{ 'large_0073.jpg' | asset_url }}",
//   "{{ 'large_0074.jpg' | asset_url }}",
//   "{{ 'large_0075.jpg' | asset_url }}",
//   "{{ 'large_0076.jpg' | asset_url }}",
//   "{{ 'large_0077.jpg' | asset_url }}",
//   "{{ 'large_0078.jpg' | asset_url }}",
//   "{{ 'large_0079.jpg' | asset_url }}",
//   "{{ 'large_0080.jpg' | asset_url }}",
//   "{{ 'large_0081.jpg' | asset_url }}",
//   "{{ 'large_0082.jpg' | asset_url }}",
//   "{{ 'large_0083.jpg' | asset_url }}",
//   "{{ 'large_0084.jpg' | asset_url }}",
//   "{{ 'large_0085.jpg' | asset_url }}",
//   "{{ 'large_0086.jpg' | asset_url }}",
//   "{{ 'large_0087.jpg' | asset_url }}",
//   "{{ 'large_0088.jpg' | asset_url }}",
//   "{{ 'large_0089.jpg' | asset_url }}",
//   "{{ 'large_0090.jpg' | asset_url }}",
//   "{{ 'large_0091.jpg' | asset_url }}",
//   "{{ 'large_0092.jpg' | asset_url }}",
//   "{{ 'large_0093.jpg' | asset_url }}",
//   "{{ 'large_0094.jpg' | asset_url }}",
//   "{{ 'large_0095.jpg' | asset_url }}",
//   "{{ 'large_0096.jpg' | asset_url }}",
//   "{{ 'large_0097.jpg' | asset_url }}",
//   "{{ 'large_0098.jpg' | asset_url }}",
//   "{{ 'large_0099.jpg' | asset_url }}",
//   "{{ 'large_0100.jpg' | asset_url }}",
//   "{{ 'large_0101.jpg' | asset_url }}",
//   "{{ 'large_0102.jpg' | asset_url }}",
//   "{{ 'large_0103.jpg' | asset_url }}",
//   "{{ 'large_0104.jpg' | asset_url }}",
//   "{{ 'large_0105.jpg' | asset_url }}",
//   "{{ 'large_0106.jpg' | asset_url }}",
//   "{{ 'large_0107.jpg' | asset_url }}",
//   "{{ 'large_0108.jpg' | asset_url }}",
//   "{{ 'large_0109.jpg' | asset_url }}",
//   "{{ 'large_0110.jpg' | asset_url }}",
//   "{{ 'large_0111.jpg' | asset_url }}",
//   "{{ 'large_0112.jpg' | asset_url }}",
//   "{{ 'large_0113.jpg' | asset_url }}",
//   "{{ 'large_0114.jpg' | asset_url }}",
//   "{{ 'large_0115.jpg' | asset_url }}",
//   "{{ 'large_0116.jpg' | asset_url }}",
//   "{{ 'large_0117.jpg' | asset_url }}",
//   "{{ 'large_0118.jpg' | asset_url }}",
//   "{{ 'large_0119.jpg' | asset_url }}",
//   "{{ 'large_0120.jpg' | asset_url }}",
//   "{{ 'large_0121.jpg' | asset_url }}",
//   "{{ 'large_0122.jpg' | asset_url }}",
//   "{{ 'large_0123.jpg' | asset_url }}",
//   "{{ 'large_0124.jpg' | asset_url }}",
//   "{{ 'large_0125.jpg' | asset_url }}",
//   "{{ 'large_0126.jpg' | asset_url }}",
//   "{{ 'large_0127.jpg' | asset_url }}",
//   "{{ 'large_0128.jpg' | asset_url }}",
//   "{{ 'large_0129.jpg' | asset_url }}",
//   "{{ 'large_0130.jpg' | asset_url }}",
//   "{{ 'large_0131.jpg' | asset_url }}",
//   "{{ 'large_0132.jpg' | asset_url }}",
//   "{{ 'large_0133.jpg' | asset_url }}"
// ];