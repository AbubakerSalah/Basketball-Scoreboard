let outputHome = document.getElementById("output-home") as HTMLElement;
const homePlus1 = document.getElementById("home-plus1") as HTMLButtonElement;
const homePlus2 = document.getElementById("home-plus2") as HTMLButtonElement;
const homePlus3 = document.getElementById("home-plus3") as HTMLButtonElement;
const outputGuest = document.getElementById("output-guest") as HTMLElement;
const guestPlus1 = document.getElementById("guest-plus1") as HTMLButtonElement;
const guestPlus2 = document.getElementById("guest-plus2") as HTMLButtonElement;
const guestPlus3 = document.getElementById("guest-plus3") as HTMLButtonElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement;
const startButton = document.getElementById("start-button") as HTMLButtonElement;
const timerDisplay = document.getElementById("timer-display") as HTMLElement;

let homeScore: number = 0
let guestScore: number = 0
let gameDuration: number = 720;
let countdownInterval: number
let gameHasstared: boolean = false

 homePlus1.addEventListener("click", function(): void {
       homeScore += 1
       if(outputHome) outputHome.textContent = homeScore.toString();
      checkLeader()
      startGame()
 })


    homePlus2.addEventListener("click", function() {
      homeScore += 2
       if(outputHome) outputHome.textContent = homeScore.toString();
       checkLeader()
       startGame()
 })

      homePlus3.addEventListener("click", function() {
         homeScore += 3
          if(outputHome) outputHome.textContent = homeScore.toString();
          checkLeader()
          startGame()
      })

guestPlus1.addEventListener("click", function() {
      guestScore+= 1
      if(outputGuest) outputGuest.textContent = guestScore.toString();
      checkLeader()
      startGame()
})

guestPlus2.addEventListener("click", function() {
      guestScore+= 2
      if(outputGuest) outputGuest.textContent = guestScore.toString();
      checkLeader()
      startGame()
})

guestPlus3.addEventListener("click", function() {
      guestScore+= 3
      if(outputGuest) outputGuest.textContent = guestScore.toString();
      checkLeader()
      startGame()
})

function checkLeader() {
      if (homeScore > guestScore) {
            outputHome.classList.add("leader")
            outputGuest.classList.remove("leader")
        } else if (guestScore > homeScore) {
            outputGuest.classList.add("leader")
            outputHome.classList.remove("leader")
        } else {
            outputHome.classList.remove("leader")
            outputGuest.classList.remove("leader")
        }
}

function resetScores() {
      homeScore = 0
      guestScore = 0
      if(outputHome) outputHome.textContent = homeScore.toString();
      if(outputGuest) outputGuest.textContent = guestScore.toString();
      outputHome.classList.remove("leader")
      outputGuest.classList.remove("leader")

      clearInterval(countdownInterval)

      gameDuration = 720
    updateTimerDisplay()
    gameHasstared = false
      
  }

resetButton.addEventListener("click", resetScores)
   
      
 

function startGame() {
      if(gameHasstared) {
            return
      }
      gameHasstared = true


    countdownInterval = setInterval(function() {
        if (gameDuration > 0) {
            gameDuration--
            updateTimerDisplay()
        } else {
            clearInterval(countdownInterval)
            alert("Game Over!")
            
            
        }
    }, 1000)
}


   

function updateTimerDisplay() {
    const minutes: number = Math.floor(gameDuration / 60)
    const seconds: number = gameDuration % 60;
    timerDisplay.textContent =
     `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
     
}
 startButton.addEventListener("click", startGame)

  