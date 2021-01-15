$(document).ready(function() {
  $("form#selector").submit(function() {
    event.preventDefault();
    const questionOne = parseInt($("input:radio[name=question1]:checked").val());
    const questionTwo = parseInt($("input:radio[name=question2]:checked").val());
    const questionThree = parseInt($("input:radio[name=question3]:checked").val());
    const questionFour = parseInt($("input:radio[name=question4]:checked").val());
    const questionFive = parseInt($("input:radio[name=question5]:checked").val());
    const total = (questionOne + questionTwo + questionThree + questionFour + questionFive);
    
    console.log(total);

    if (total === 5) {
      $("#rust").show();
    } else if ( total > 5 && total < 8) {
      $("#go").show();
    } else if (total >= 8 && total < 12){
      $("#python").show()
    } else if (total === 12){
      $("#ruby").show()
    }
    
  });
});