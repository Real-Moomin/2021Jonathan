var subjectText=[];
$(document).ready(function(){

  document.getElementById("close").addEventListener('click', closeWindow())
  document.getElementById("window_bg").addEventListener('click', closeWindow())
});

function subject(num) {
$(".window_bg").addClass("visible");
$(".window_bg").removeClass("invisible");
$(".window").addClass("pop");
$(".window").removeClass("invisible");
}

  function closeWindow() {
    $(".window").removeClass("visible");
    $(".window_bg").removeClass("visible");
    $(".window").addClass("invisible");
    $(".window_bg").addClass("invisible");
    $(".window").removeClass("pop");
  }

function random(num){

}
