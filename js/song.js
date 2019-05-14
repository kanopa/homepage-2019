var beepThree = $("#song")[0];
$("#nav-three") .mouseenter(function() {
    beepThree.play();
}).mouseleave(function()
     { beepThree.pause();});
