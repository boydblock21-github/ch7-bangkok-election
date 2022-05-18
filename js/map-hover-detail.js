

$(".map-item").hover(function(e) {
    $(".seemore-county-container").css("display", "block");
});

$(".map-item").mouseleave(function(e) {
    $(".seemore-county-container").css("display", "none");
});


$(document)
  .mousemove(function(e) {
    if(screen.width <= 576){
      $(".seemore-county-container").css("top", e.offsetY - 70);
      $(".seemore-county-container").css("right", e.offsetX);
      $(".seemore-county-container").css("left", e.offsetX - 40);
    }
    else if(screen.width >= 576) {
      $(".seemore-county-container").css("top", e.offsetY - 250);
      $(".seemore-county-container").css("right", e.offsetX);
      $(".seemore-county-container").css("left", e.offsetX - 50);
    } 
  })
  .mouseover();




function displaySeemoreOpenApp() {
  var classArray = document.getElementsByClassName("seemore-county-container");
  for (var i = 0; i < classArray.length; i++) {
    classArray[i].className += " -hidden"
  }
}

function OpenApp() {
  var link = '';
  var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false);

  if (iOS) {
    return displaySeemoreOpenApp()
  }

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if (isAndroid) {
    return displaySeemoreOpenApp()
  }

  if( link != '' ){
      $('.seemore-county-container').removeClass('-hidden');
  } 
}
window.onload = function() {
  OpenApp()
};





  
  



  
