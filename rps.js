var choices = ["rock", "paper", "scissors"];
var wins = 0;
var losses = 0;
var ties = 0;

function judge(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            return "Tie!";
        }
        if (computerChoice === "scissors") {
            return "You win!";
        }
        if (computerChoice === "paper") {
            return("You lose!");
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return("You win!");
        }
        if (computerChoice === "scissors") {
            return("You lose!");
        }
        if (computerChoice === "paper") {
            return("Tie!");
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return("You lose!");
        }
        if (computerChoice === "scissors") {
            return("Tie!");
        }
        if (computerChoice === "paper") {
            return("You win!")
        }
    } else {
        return("Wait what?")
    }
}

function play(playerChoice) {
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result = judge(playerChoice, computerChoice);
    var msg = "You picked " + playerChoice + "!" + "<br/>" +
              "Computer picked " + computerChoice + "!" + "<br/>" +
              result;
    var e = document.getElementById("msg");
    e.innerHTML = msg;
    if (result === "You win!") {
      wins = wins + 1;
    } else if (result === "You lose!") {
      losses = losses + 1;
    } else if (result === "Tie!") {
      ties = ties + 1;
    } 
    document.getElementById("wins").innerHTML = "" + wins;
      
    document.getElementById("losses").innerHTML = "" + losses;

    document.getElementById("ties").innerHTML = "" + ties;
}
