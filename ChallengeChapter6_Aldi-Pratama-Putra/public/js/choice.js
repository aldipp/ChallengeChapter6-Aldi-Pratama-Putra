class Choice {
    constructor(playerChoice) {
        this.playerChoice = playerChoice
        this.compChoice = this.compRandomChoice()
    }

    getPlayerChoice() {
        return this.playerChoice
    }

    getCompChoice() {
        return this.compChoice
    }
    
    compRandomChoice() {
        const actionChoice = ['rock', 'paper', 'scissors']

        return actionChoice[Math.floor(Math.random() * actionChoice.length)]
    }
}