let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToEmoji(choice) {
    switch (choice) {
        case "rock":
            return "&#x1F44A;"; // Rock emoji
        case "paper":
            return "&#x1f590;"; // Paper emoji
        case "scissors":
            return "&#x270c;"; // Scissors emoji
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

// Function to update scoreboard
function updateScoreboard(userChoice, computerChoice, result) {
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const result_p = document.getElementById("result");
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    
    const userEmoji = convertToEmoji(userChoice);
    const computerEmoji = convertToEmoji(computerChoice);
    
    result_p.innerHTML = `${userEmoji} vs. ${computerEmoji}. ${result}`;
}


function userChoiceHandler(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScoreboard(userChoice, computerChoice, result);
}

document.getElementById("rock").addEventListener("click", function () {
    userChoiceHandler("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    userChoiceHandler("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    userChoiceHandler("scissors");
});
