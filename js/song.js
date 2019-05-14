var beepThree = $("#song")[0];
beepThree.volume = 0.1;
$("#nav-three") .mouseenter(function() {
    beepThree.play();
}).mouseleave(function()
     { beepThree.pause();});
