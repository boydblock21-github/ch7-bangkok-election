

$(".map-item").hover(function(e) {
    $(".seemore-county-container").css("display", "block");
});
$("#mod-test").click(function(e) {
    // $(".seemore-county-container").css("display", "none");
    alert('mmm');
});

// $(".map-item").mouseleave(function(e) {
//     $(".seemore-county-container").css("display", "none");
// });


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


  
