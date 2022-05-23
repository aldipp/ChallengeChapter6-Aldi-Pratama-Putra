class Game {
    constructor () {
        this.playerActionButton = document.querySelectorAll('.player > button')
        this.playerActionButton.forEach(option => option.addEventListener('click', this.startGame.bind(this)))

        this.compActionButton = document.querySelectorAll('.computer > button')
        this.compActionButton.forEach(each => each.style.pointerEvents = "none")
        
        this.result = null
        this.status = document.querySelector("#status")
        this.refreshButton = document.querySelector('#refreshButton')
        
    }

    startGame(e) {
        const playerDecision = e.target.dataset.option                                      
        this.playerActionButton.forEach(choice => choice.style.pointerEvents = 'none')      
        this.status.classList.remove("status")                                              

        // add bothChoice class to player's choice
        if(e.srcElement.localName === "button") {
            e.srcElement.classList.add('bothChoice')
        } else {
            e.srcElement.parentElement.classList.add('bothChoice')
        }

        //instantiate of Choice class
        this.choice = new Choice (playerDecision)

        //get both player's choice
        const playerChoice = this.choice.getPlayerChoice()
        const compChoice = this.choice.getCompChoice()

        //add bothChoice class to add new style to computer's choice
        if(compChoice === "rock") {
            this.compActionButton[0].classList.add('bothChoice')
            this.compActionButton[1].classList.remove('bothChoice')
            this.compActionButton[2].classList.remove('bothChoice')                            
        } else if (compChoice === "paper") {
            this.compActionButton[1].classList.add('bothChoice')
            this.compActionButton[0].classList.remove('bothChoice')
            this.compActionButton[2].classList.remove('bothChoice')
        } else {
            this.compActionButton[2].classList.add('bothChoice')
            this.compActionButton[0].classList.remove('bothChoice')
            this.compActionButton[1].classList.remove('bothChoice')
        }

        //print the choices that has been made on console
        console.log(`Player choose ${playerChoice}`)
        console.log(`Computer choose ${compChoice}`)

        //get the winner and print it on console
        Result.winner(playerChoice, compChoice)
        if (Result.result === "win") {
            this.status.innerHTML = "PLAYER 1<br>WIN" 
            this.status.classList.add("resultStatus") 
            this.status.style.backgroundColor = "#4C9654"
            console.log("The Result is Player 1 Win")
        } else if (Result.result === "draw") { 
            this.status.innerHTML ="DRAW" 
            this.status.classList.add("resultStatus")
            this.status.style.backgroundColor = "#035B0C"
            console.log("The Result is Draw")
        } else {
            this.status.innerHTML = "COM<br>WIN"
            this.status.classList.add("resultStatus")
            this.status.style.backgroundColor = "#4C9654"
            console.log("The Result is Computer Win")
        }

        //apply addEventListener on refresh button and invoke refreshTheGame method
        this.refreshButton.addEventListener('click', this.refreshTheGame.bind(this))
    }

    refreshTheGame () {
        //conditional to confirm that the game has been played
        if (Result.result != null) {
            Result.result = null 

            //change the status style to its initial value
            this.status.innerHTML = "VS"
            this.status.style.backgroundColor = "transparent"
            this.status.classList.remove("resultStatus")
            this.status.classList.add('status')

            //turn the button background color off and make it available to be clicked
            for(let i = 0; i < this.playerActionButton.length; i++) {
                this.playerActionButton[i].style.pointerEvents = "auto"
                this.playerActionButton[i].classList.remove('bothChoice')
            }
            for(let i = 0; i < this.compActionButton.length; i++) {
                this.compActionButton[i].classList.remove('bothChoice')
            }
        }
    }
}