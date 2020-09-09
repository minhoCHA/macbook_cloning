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
    onUpdate: function () {
    $(".section_intro_img_001").attr("src", images[obj.curImg]); // set the image source
    }
}
);
  
// intro scene
var main_scene = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0.1,
duration: 800
})
.setTween(main_tween)
.addIndicators({ name: "intro image scene" }) // add indicators (requires plugin)
.setPin(intro)
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


// the animation to use
const tl = gsap.timeline({ paused: true });
tl.to(".component.main .top-element .box", { scale: 1, autoAlpha: 0 });

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
  tl.progress((scrollY - startY) / finishDistance);

  // Let the scroll event fire again
  requestId = null;
}


// START FEATURE SECTION
const feature = document.querySelector('.section.desc');
const video = feature.querySelector('video');

// video scene
const scene_feature = new ScrollMagic.Scene({
    duration: 100,
    triggerElement: video,
  })
    .addIndicators({ name: "feature scene" })
    .addTo(controller)
    .on('enter', () => {
      video.play();
    })
  