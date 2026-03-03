let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let userWin = true;

let boxs = document.querySelectorAll(".box");
let result = document.querySelector("#result");

function randomGenerator(){
    const options = ["stone","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
}

const matchDraw = () =>{
    result.innerText = "Match was Draw";
    result.style.backgroundColor = "rgb(46, 32, 32)";
}

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
        result.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        userScore.innerText++;
    }else{
        result.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
        compScore.innerText++;
    }
}

const showScorecard = () =>{
    result.innerText = "Match ";
    result.style.backgroundColor = "rgb(46, 32, 32)";
}

function playGame(userChoice,compChoice){
    if(userChoice === compChoice){
        matchDraw();
    }else {
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        let userChoice = box.getAttribute("id");
        let compChoice = randomGenerator();
        playGame(userChoice,compChoice);
    })
})