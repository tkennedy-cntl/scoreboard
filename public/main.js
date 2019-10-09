let teamOneScore = 0
let teamTwoScore = 0

const teamOneScoreText = document.querySelector('.team-1-score')
teamOneScoreText.textContent = teamOneScore

const teamTwoScoreText = document.querySelector('.team-2-score')
teamTwoScoreText.textContent = teamTwoScore

const teamOneAddOne = () => {
  teamOneScore += 1
  teamOneScoreText.textContent = teamOneScore
  if (teamOneScore > 7) {
    teamOneScoreText.style.color = 'yellow'
  }
  if (teamOneScore === 10) {
    scoreReachesTen()
  }
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  teamTwoScoreText.textContent = teamTwoScore 
  if (teamTwoScore === 10) {
    teamTwoScoreReachesTen() 
  }
}

const teamOneSubtractOne = () => {
  teamOneScore -= 1
  teamOneScoreText.textContent = teamOneScore
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  console.log(teamTwoScore)
  console.log('subtract 1')
  teamTwoScoreText.textContent = teamTwoScore
}

const scoreReachesTen = () => {
console.log('score equals 10')
teamOneScoreText.style.color = 'red'
}

function teamTwoScoreReachesTen () {
  console.log('team two equals 10')
  teamTwoScoreText.style.color = 'blue'
}

const main = () => {
  document.querySelector('button.team-1-add-1-button').addEventListener('click', teamOneAddOne)

  document.querySelector('button.team-1-subtract-1-button').addEventListener('click', teamOneSubtractOne)

  document.querySelector('.team-2-add-1-button').addEventListener('click', teamTwoAddOne)

  document.querySelector('.team-2-subtract-1-button').addEventListener('click', teamTwoSubtractOne)
}

document.addEventListener('DOMContentLoaded', main)



