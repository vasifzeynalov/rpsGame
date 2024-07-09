document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors"];
  const choiceButtons = document.querySelectorAll(".choice");
  const userChoiceDisplay = document.querySelector("#user-choice span");
  const computerChoiceDisplay = document.querySelector("#computer-choice span");
  const resultDisplay = document.querySelector("#result span");

  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const userChoice = button.id;
      const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];
      userChoiceDisplay.textContent = translateChoice(userChoice);
      computerChoiceDisplay.textContent = translateChoice(computerChoice);
      resultDisplay.textContent = getResult(userChoice, computerChoice);
    });
  });

  function translateChoice(choice) {
    switch (choice) {
      case "rock":
        return "ROCK";
      case "paper":
        return "PAPER";
      case "scissors":
        return "SCISSORS";
    }
  }

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "DRAW!";
    }
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "YOU WIN!";
    } else {
      return "LOU LOSE!";
    }
  }
});
