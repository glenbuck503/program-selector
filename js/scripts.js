$(document).ready(function() {
  $("form#selector").submit(function() {
    event.preventDefault();
    const questonOne = $("input:radio[name=question1]:checked").val();
    const questonTwo = $("input:radio[name=question2]:checked").val();
    const questonThree = $("input:radio[name=question3]:checked").val();
    const questonFour = $("input:radio[name=question4]:checked").val();
    const questonFive = $("input:radio[name=question5]:checked").val();



    $("#output").text();
  });
});