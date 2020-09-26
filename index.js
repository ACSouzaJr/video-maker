const readline = require("readline-sync");

function start() {
  const content = {};

  content.searchTerm = askAndReturnSearchTerm();
  content.context = askAndReturnContext();

  function askAndReturnSearchTerm() {
    return readline.question("Type a Wikipedia search term: ");
  }

  function askAndReturnContext() {
    const context = ["What is", "Who is", "The history of"];
    const contextIndex = readline.keyInSelect(context, "Which context?");
    const contextText = context[contextIndex];

    return contextText;
  }

  console.log(content);
}

start();
