# Prompt Quizzer

## Description
This project is a simple JavaScript quiz game that executes entirely within the browser console .It loops through a predefined set of questions, prompts the user for input, and provides immediate feedback using alerts[cite: 8]. [cite_start]The program tracks the user's score and displays the final result upon completion[cite: 10].

## Features
* -Question Array:- Stores questions and answers in structured objects
* -Input Handling:- Uses `prompt()` to collect user answers and `alert()` for feedback
* -Validation:- Normalizes user input using `toLowerCase()` and `trim()` for accurate comparisons
* -Score Tracking:- Maintains a running count of correct answers and displays the total score at the end

## Technologies Used
* JavaScript (Arrays, Loops, Conditionals, Functions)

## How to Run
1.  Open a web browser (Chrome, Firefox, Edge, etc.).
2.  Open the -Developer Tools- (Right-click > Inspect or press F12).
3.  Navigate to the -Console- tab
4.  Copy the code from `quiz.js` and paste it into the console.
5.  Press -Enter- to start the quiz.

## Project Structure
* `quiz.js`: Contains the main logic, question array, and the `runQuiz()` function
