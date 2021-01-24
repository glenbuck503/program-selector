$(document).ready(function() {
  $("form#selector").submit(function() {
    event.preventDefault();
    
    const questionOne = parseInt($("input:radio[name=question1]:checked").val());
    const questionTwo = parseInt($("input:radio[name=question2]:checked").val());
    const questionThree = parseInt($("input:radio[name=question3]:checked").val());
    const questionFour = parseInt($("input:radio[name=question4]:checked").val());
    const questionFive = parseInt($("input:radio[name=question5]:checked").val());
    const total = (questionOne + questionTwo + questionThree + questionFour + questionFive);
    let userName = $("input#name").val();
    
    $("#rust").hide()
    $("#go").hide()
    $("#python").hide()
    $("#ruby").hide()
    $(".result").hide()
  
    if (total === 5) {
      $("#ruby").prepend("Hi" + " " + userName + "!");
      $(".result").fadeIn();
      $("#ruby").fadeIn();
      ClearFields();
    } else if ( total > 5 && total < 8) {
    $("#go").prepend("Hi" + " " + userName + "!");
    $(".result").fadeIn();
    $("#go").fadeIn();
    ClearFields();
    } else if (total >= 8 && total < 12){
    $("#python").prepend("Hi" + " " + userName + "!");
    $(".result").fadeIn();
    $("#python").fadeIn();
    ClearFields();
    } else if (total === 12){
    $("#rust").prepend("Hi" + " " + userName + "!");
    $(".result").fadeIn();
    $("#rust").fadeIn();
    ClearFields();
    }
  });

  $("form#code").submit(function() {
    event.preventDefault();
    let codeCheck = $.trim($("#codeCheck").val());
    
  
    $(".codeResults").hide();
    $("#correct").hide();
    $("#no").hide();

    if (codeCheck != "" && codeCheck == "$(\"body\").addClass(\"blue-background\");\n\code"){
      $("body").removeClass();
      $("body").addClass("blue-background");
    } else if (codeCheck != "" && codeCheck == "img class=\"pic\" src=\"img/ocean.jpeg\""){
      $(".codeResults").show();
      $("#correct").fadeIn();
    } else if (codeCheck != "" && codeCheck == "$(\"body\").addClass(\"black-background\");"){
      $("body").removeClass();
      $("body").addClass("black-background");
    } else {
      $(".codeResults").show();
      $("#no").fadeIn();
    }
  });
});


