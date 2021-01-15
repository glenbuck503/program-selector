$(document).ready(function() {
  $("form#selector").submit(function() {
    event.preventDefault();
    const questionOne = $("input:radio[name=question1]:checked").val();
    const questionTwo = $("input:radio[name=question2]:checked").val();
    const questionThree = $("input:radio[name=question3]:checked").val();
    const questionFour = $("input:radio[name=question4]:checked").val();
    const questionFive = $("input:radio[name=question5]:checked").val();
    const total = (questionOne + questionTwo + questionThree + questionFour + questionFive);
    
    console.log(total);

    // if (total > 3) {
    //   $("#rust").show();
    // }else if ( total < 1) {
    //   $("#go").show();

    // }

      


    





    $("#rust").hide();
    $("#go").hide();
    $("#python").hide();
    $("#ruby").hide();
  });
});