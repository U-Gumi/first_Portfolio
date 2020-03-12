 /*스크롤이벤트******/
function scrollEffectSetter(motionTarget, className, scrollTarget, rightNow) {  
  var vh, curScrollY, scrollTargetTop;
  rightNow = rightNow || false;

  $(window).on("resize", function() {
    vh = window.innerHeight;
  }).trigger("resize");

  $(window).on("scroll", function() {
    curScrollY = window.scrollY;
    scrollTarget = scrollTarget || motionTarget;

    scrollTargetTop = $(scrollTarget).position().top;

    if (scrollTargetTop - (vh / 1.3) <= curScrollY && !$(motionTarget).hasClass(className)) {
      //console.log("OK");
      $(motionTarget).addClass(className);
      
    }
  });
  /*바로시작이벤트*/
  if (rightNow) {
  	$(window).trigger("scroll");
  }
  
}