const questionBank = [

      
  {
    questionText: "What does the method split do to a string?",
    answerChoices: [
      "splits the last character off the string",
      "deconstructs the string and places it into an array",
      "splits the first character off the string",
      "splits the string into two user selected variables",
    ],
    correctAnswer: "deconstructs the string and places it into an array",
  },
  {
    questionText:
      "Where is the correct place to insert a JavaScript in an HTML document?",
    answerChoices: [
      "Both the <head> section and the <body> section are correct",
      "The bottom of the <body> section",
      "The <head> section",
      "The footer section",
    ],
    correctAnswer: "The bottom of the <body> section",
  },
  {
    questionText: 'How do you call a function named "myFunction"?',
    answerChoices: [
      "call myFunction()",
      "call function myFunction",
      "Call.myFunction()",
      "myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    questionText: "How can you add a comment in javaScript?",
    answerChoices: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment",
      "#This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
  {
    questionText: "How do you find the largest number of 2 and 4?",
    answerChoices: ["Math.Ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correctAnswer: "Math.max(2,4)",
  },
  {
    questionText: "In JavaScript, the symbols + - * and / are:",
    answerChoices: [
      "operators",
      "expressions",
      "comparison operators",
      "None of the Above",
    ],
    correctAnswer: "operators",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's javaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Document",
  },
  {
    questionText: "In JavaScript, the expression x!=y returns false if:",
    answerChoices: [
      "the variables are equal",
      "x is less than y",
      "the variables are not equal",
      "None of the above",
    ],
    correctAnswer: "the variables are equal",
  },
  {
    questionText:
      "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is:",
    answerChoices: ["Frame", "Document", "Window", "browser_window"],
    correctAnswer: "Window",
  },
  {
    questionText:
      'In JavaScript, what would be the proper form of address in the object hierarchy for the second element in a form called "info"?',
    answerChoices: [
      "document.info.elements[1]",
      "document.info.elements[2]",
      "document.forms.info.elements[2]",
      "info.elements[2]",
    ],
    correctAnswer: "document.info.elements[1]",
  },
]; 
    
export default questionBank;