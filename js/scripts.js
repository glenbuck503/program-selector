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
      $(".result").fadeIn();
      $("#ruby").prepend("Hi" + " " + userName + "!");
      $("#ruby").fadeIn();
    } else if ( total > 5 && total < 8) {
      $(".result").fadeIn();
      $("#go").fadeIn();
    } else if (total >= 8 && total < 12){
      $(".result").fadeIn();
      $("#python").fadeIn()
    } else if (total === 12){
      $(".result").fadeIn();
      $("#rust").fadeIn()
    }
    
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});

