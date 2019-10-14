	// shorthand for document.querySelector
	const qs = (element) => document.querySelector(element)
	

	// Setting starting scores in javascript memory to 0
	let teamOneScore = 0
	let teamTwoScore = 0
  let teamOneSelection = " "
  let teamTwoSelection = " "



	// Setting Team One Score Text to 0 from 10
	const teamOneScoreText = document.querySelector('.team-1-score')
	teamOneScoreText.textContent = teamOneScore

	// creating a function to add 1 to the score and returning new score value Team One
	const teamOneAddOne = () => {
	  teamOneScore += 1
	  teamOneScoreText.textContent = teamOneScore
    }
   
   // Setting Team Two Score Text to 0 from 10
	const teamTwoScoreText = document.querySelector('.team-2-score')
	teamTwoScoreText.textContent = teamTwoScore

	// creating a function to add 1 to the score and returning new score value Team One
	const teamTwoAddOne = () => {
	  teamTwoScore += 1
	  teamTwoScoreText.textContent = teamTwoScore
    }
    




  // setting team one selection to display and store in teamOneSelectionText
  const teamOneSelectionText = document.querySelector('.team-1-selection')
    teamOneSelectionText.textContent = teamOneSelection 

  // setting team two selection to display and store in teamTwoSelectionText 
  const teamTwoSelectionText = document.querySelector('.team-2-selection')
    teamTwoSelectionText.textContent = teamTwoSelection 
  
    

// adding Rock to team one selection
  const teamOneSelectionRock = () => {
      teamOneSelection += "Rock"
      teamOneSelectionText.textContent = teamOneSelection
      console.log('teamOneSelectionRock')
      if (teamOneSelection == "Rock" && teamTwoSelection == "Scissors") {
      teamOneScore += 1
      teamOneScoreText.textContent = teamOneScore
      }
  }
  
  // adding Paper to team one selection
  const teamOneSelectionPaper = () => {
    teamOneSelection += "Paper"
    teamOneSelectionText.textContent = teamOneSelection
    console.log('teamOneSelectionPaper')
}
// adding Scissors to team one selection
  const teamOneSelectionScissors = () => {
   teamOneSelection += "Scissors"
   teamOneSelectionText.textContent = teamOneSelection
   console.log('teamOneSelectionScissors')
  
}


// adding Rock to team two selection
  const teamTwoSelectionRock = () => {
    teamTwoSelection += "Rock"
    teamTwoSelectionText.textContent = teamTwoSelection
    console.log('teamTwoSelectionRock')
}
// adding Paper to team two selection
  const teamTwoSelectionPaper = () => {
    teamTwoSelection += "Paper"
    teamTwoSelectionText.textContent = teamTwoSelection
    console.log('teamTwoSelectionPaper')
}
// adding Scissors to team two selection
  const teamTwoSelectionScissors = () => {
   teamTwoSelection += "Scissors"
   teamTwoSelectionText.textContent = teamTwoSelection
    console.log('teamTwoSelectionScissors')
}





  
  






	// creating main function that is called when script tag loads
	const main = () => {


    // telling team 1 rock button to listen for a click and run teamOneSelectionRock
    document.querySelector('button.team-1-rock-button').addEventListener('click', teamOneSelectionRock)
    
    // telling team 1 paper button to listen for a click and run teamOneSelectionPaper
    document.querySelector('button.team-1-paper-button').addEventListener('click', teamOneSelectionPaper)

    // telling team 1 scissors button to listen for a click and run teamOneSelectionScissors
    document.querySelector('button.team-1-scissors-button').addEventListener('click', teamOneSelectionScissors)



    // telling team 2 rock button to listen for a click and run teamTwoSelectionRock
     document.querySelector('button.team-2-rock-button').addEventListener('click', teamTwoSelectionRock)

    // telling team 2 paper button to listen for a click and run teamTwoSelectionPaper
    document.querySelector('button.team-2-paper-button').addEventListener('click', teamTwoSelectionPaper)

    // telling team 2 scissors button to listen for a click and run teamTwoSelectionScissors
    document.querySelector('button.team-2-scissors-button').addEventListener('click', teamTwoSelectionScissors)


	}
	

	// telling the whole document to listen for the DOM's content to load and then run main function
	document.addEventListener('DOMContentLoaded', main)

  
