let outputHome = document.getElementById("output-home")
const homePlus1 = document.getElementById("home-plus1")
const homePlus2 = document.getElementById("home-plus2")
const homePlus3 = document.getElementById("home-plus3")
const outputGuest = document.getElementById("output-guest")
const guestPlus1 = document.getElementById("guest-plus1")
const guestPlus2 = document.getElementById("guest-plus2")
const guestPlus3 = document.getElementById("guest-plus3")
const resetButton = document.getElementById("reset-button")
const startButton = document.getElementById("start-button")

let homeScore = 0
let guestScore = 0
let gameDuration = 720;
let countdownInterval
let gameHasstared = false

 homePlus1.addEventListener("click", function() {
       homeScore += 1
      outputHome.textContent = homeScore
      checkLeader()
      startGame()
 })


    homePlus2.addEventListener("click", function() {
      homeScore += 2
       outputHome.textContent = homeScore
       checkLeader()
       startGame()
 })

      homePlus3.addEventListener("click", function() {
         homeScore += 3
          outputHome.textContent = homeScore
          checkLeader()
          startGame()
      })

guestPlus1.addEventListener("click", function() {
      guestScore+= 1
      outputGuest.textContent = guestScore
      checkLeader()
      startGame()
})

guestPlus2.addEventListener("click", function() {
      guestScore+= 2
      outputGuest.textContent = guestScore
      checkLeader()
      startGame()
})

guestPlus3.addEventListener("click", function() {
      guestScore+= 3
      outputGuest.textContent = guestScore
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
      outputHome.textContent = homeScore
      outputGuest.textContent = guestScore
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
    const minutes = Math.floor(gameDuration / 60)
    const seconds = gameDuration % 60;
    document.getElementById("timer-display").textContent =
     `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
     
}
 startButton.addEventListener("click", startGame)

  