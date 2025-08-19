let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let displayMsg = document.querySelector("#msg");
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");

// computer choice
const compChoices = () => {
    let options = ["stone", "paper", "scissor"];
    let randIDX =  Math.floor(Math.random() * 3);
    return options[randIDX];
}

// user and computer check 
const drawGame = (userChoices, getCompChoice) => {

    if(userChoices === getCompChoice){
        displayMsg.innerText = "Draw Game 😐";
    }
    else if ( (userChoices === "stone" && getCompChoice === "scissor") ||  
              (userChoices === "paper" && getCompChoice === "stone") || 
              (userChoices === "scissor" && getCompChoice === "paper"))
              {
        displayMsg.innerText = "You Win! 🎉";
        userScore++;
        userScores.innerText = userScore;
    }
    else {
        displayMsg.innerText = "You Lose! 😢";
        compScore++;
        compScores.innerText = compScore;
    }
}

// user choice
const playGame = (userChoices) => {
    console.log("userChoice =>",userChoices);
    const getCompChoice = compChoices();
    console.log("compChoice =>", getCompChoice);

    drawGame(userChoices, getCompChoice);
}

//onclick 
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoices = choice.getAttribute("id");
        playGame(userChoices);
        
    })
});