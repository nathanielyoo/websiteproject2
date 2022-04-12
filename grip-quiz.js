function quizSubmit() { //function that is activated when the submit button is pressed
    var userScore = 0; //setting the userScore variable to 0

    for(var i = 1; i <= 7; i++) { //loop that goes through the question/s (only 1 in this case)
      var radioQuestions = document.getElementsByName('q'+i);
  
      for(var c = 0; c < radioQuestions.length; c++) { //loop that checks the 'checked' radio buttons
        var questionValue = radioQuestions[c];
        if(questionValue.checked && questionValue.value == "1") { //if the radio button that is checked has a value of 1 (the correct answer), 1 will be added to the userScore variable
          userScore++;
        }
      }
    }

    var scoreShow = "Your Score: " + userScore + " out of 7"; //defining the variable for showing the results

    document.getElementById('score').innerHTML = scoreShow; //changes the innerHTML of 'score' (which is just a <p> tag) to scoreShow, the previously defined variable
  }