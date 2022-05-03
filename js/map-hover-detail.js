

$(".map-item").hover(function(e) {
    $(".seemore-county-container").css("display", "block");
    // $(".seemore-county-container").html($(this).data("info"));
});

$(".map-item").mouseleave(function(e) {
    $(".seemore-county-container").css("display", "none");
});


$(document)
  .mousemove(function(e) {
    $(".seemore-county-container").css("top", e.clientY - 580);
    $(".seemore-county-container").css("right", e.clientX);
    $(".seemore-county-container").css("left", e.clientX - 120);
    // if(screen.width <= 576){
    //   $(".seemore-county-container").css("top", e.clientY - 70);
    //   $(".seemore-county-container").css("right", e.clientX);
    //   $(".seemore-county-container").css("left", e.clientX - 40);
    // }
    // else if(screen.width >= 576) {
    //   $(".seemore-county-container").css("top", e.clientY - 80);
    //   $(".seemore-county-container").css("right", e.clientX);
    //   $(".seemore-county-container").css("left", e.clientX - 100);
    // }
    // else if(screen.width >= 768) {
    //   $(".seemore-county-container").css("top", e.clientY - 10);
    //   $(".seemore-county-container").css("right", e.clientX);
    //   $(".seemore-county-container").css("left", e.clientX - 100);
    // }
    // else if(screen.width >= 1024) {
    //   $(".seemore-county-container").css("top", e.clientY - 480);
    //   $(".seemore-county-container").css("right", e.clientX);
    //   $(".seemore-county-container").css("left", e.clientX - 80);
    // } 
    // else if(screen.width >= 1360) {
    //   $(".seemore-county-container").css("top", e.clientY - 480);
    //   $(".seemore-county-container").css("right", e.clientX);
    //   $(".seemore-county-container").css("left", e.clientX - 80);
    // } 
    // else {
    //   $(".seemore-county-container").css("top", e.clientY - 450);
    //   $(".seemore-county-container").css("right", e.clientX - 120);
    //   $(".seemore-county-container").css("left", e.clientX);
    // }
  })
  .mouseover();

  
// var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// if (ios) {
//   $("a").on("click touchend", function() {
//     var link = $(this).attr("href");
//     window.open(link, "_blank");
//     return false;
//   });
// }
  
