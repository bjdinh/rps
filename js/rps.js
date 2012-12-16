var prompt = function(msg) {
  print(msg);
  return readline();
}
var choices = ["rock", "paper", "scissors"];
var pick = Math.floor(Math.random() * 3);
var myChoice = prompt("What is your choice? (rock, paper, scissors.)");
var computerChoice = choices[pick];
print("computer picked " + computerChoice)
if (myChoice === "rock") {
	if (computerChoice === "rock") {
		print("Tie!");
	}
	if (computerChoice === "scissors") {
		print("You win!");
	}
	if (computerChoice === "paper") {
		print("You lose!");
	}
} else if (myChoice === "paper") {
	if (computerChoice === "rock") {
		print("You win!");
	}
	if (computerChoice === "scissors") {
		print("You lose!");
	}
	if (computerChoice === "paper") {
		print("Tie!");
	}
} else if (myChoice === "scissors") {
	if (computerChoice === "rock") {
		print("You lose!");
	}
	if (computerChoice === "scissors") {
		print("Tie!");
	}
	if (computerChoice === "paper") {
		print("You win!")
	}
} else {
	print("Wait what?")
}
