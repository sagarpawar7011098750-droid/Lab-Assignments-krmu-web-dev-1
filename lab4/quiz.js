
function runQuiz() {
  
  console.log("--> Quiz has started!.");

  var score = 0;
  var questions = [
    { q: "What is the capital of France?", a: "paris" },
    { q: "What is 5 + 7?", a: "12" },
    { q: "Who is the President of Russia?", a: "vladimir putin" },
    { q: "Which planet is the Red Planet?", a: "mars" },
    { q: "Web dev language?", a: "javascript" }
  ];

  for (var i = 0; i < questions.length; i++) {
    
    var input = prompt(questions[i].q); 

    
    if (input === null) {
        console.log("Quiz cancelled by user.");
        return; 
    }

    
    if (input.trim().toLowerCase() === questions[i].a) {
      alert("Correct!"); 
      console.log("Question " + (i+1) + ": Correct");
      score++;
    } else {
      alert("Wrong! The answer is: " + questions[i].a);
      console.log("Question " + (i+1) + ": Wrong");
    }
  }

  
  var finalMsg = "Final Score: " + score + "/" + questions.length;
  console.log(finalMsg); 
  alert(finalMsg);       
}


runQuiz();