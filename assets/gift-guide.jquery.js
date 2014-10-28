$( ".result" ).hide();

var ei = "";
var ns = "";
var ft = "";
var pj = "";

$( ".mbti-type" ).click( function() {
  var mbti_id = $(this).attr("id");
  switch (mbti_id) {
    case ("e"):
      $("#i").removeClass("selected");
      ei = "e";
      $( this ).addClass("selected");
      checkForMBTISelected();
      break;
    case ("i"):
      $("#e").removeClass("selected");
      ei = "i";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("n"):
      $("#s").removeClass("selected");
      ns = "n";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("s"):
      $("#n").removeClass("selected");
      ns = "s";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("f"):
      $("#t").removeClass("selected");
      ft = "f";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("t"):
      $("#f").removeClass("selected");
      ft = "t";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("p"):
      $("#j").removeClass("selected");
      pj = "p";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("j"):
      $("#p").removeClass("selected");
      pj = "j";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
  }
});

$( ".mbti-type-mobile" ).click( function() {
  var mbti_id = $(this).attr("id");
  switch (mbti_id) {
    case ("e"):
      $("#i").removeClass("selected");
      ei = "e";
      $( this ).addClass("selected");
      checkForMBTISelected();
      break;
    case ("i"):
      $("#e").removeClass("selected");
      ei = "i";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("n"):
      $("#s").removeClass("selected");
      ns = "n";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("s"):
      $("#n").removeClass("selected");
      ns = "s";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("f"):
      $("#t").removeClass("selected");
      ft = "f";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("t"):
      $("#f").removeClass("selected");
      ft = "t";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("p"):
      $("#j").removeClass("selected");
      pj = "p";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
    case ("j"):
      $("#p").removeClass("selected");
      pj = "j";
      checkForMBTISelected();
      $( this ).addClass("selected");
      break;
  }
});

function checkForMBTISelected() {
  if (ei) { if (ns) { if (ft) { if (pj) {
    $( "#take-our-quiz" ).hide();
    $( ".result" ).hide();
    var mbti_type = ei + ns + ft + pj;
    $("#" + mbti_type).fadeIn(700);
  }}}}
};