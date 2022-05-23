class Result {
    static winner(playerChoice, compChoice) {
        if (playerChoice === "rock" && compChoice === "scissors" || playerChoice === "scissors" && compChoice === "paper" || playerChoice === "paper" && compChoice === "rock") {
            this.result = "win"
        } else if (playerChoice === "scissors" && compChoice === "rock" || playerChoice === "paper" && compChoice === "scissors" || playerChoice === "rock" && compChoice === "paper") {
            this.result = "lose"
        } else {
            this.result = "draw"
        }
    }
}