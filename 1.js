let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    //rock,paper,scissors
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was drawn.Play again/";
    msg.style.backGroundColor="#081b31";
    msg.style.color="white";
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
}
else{
    computerScore++;
    compScorePara.innerText=computerScore;
    msg.innerText=`You lose! as computer's  ${compChoice} beats your ${userChoice}` ;
    msg.style.backgroundColor="red";
    msg.style.color="white";

}
};

const playGame=(userChoice)=>{
// console.log("user choice =", userChoice);
//now to generate computers choice
const compChoice=genCompChoice();
// console.log("comp choice =", compChoice);

if(userChoice==compChoice) {
    //draw condition
    drawGame();
}
else{
    let userWin=true;
    if(userChoice=="rock"){
        // scissors,paper   computer have
userWin=compChoice==="paper" ? false: true;
    }
    else if(userChoice=="paper"){
        //rock,scissors
 userWin=compChoice==="scissors" ? false: true;
    }
    else{
// rock, paper
userWin=compChoice==="rock" ? false: true;
    }

showWinner(userWin,userChoice,compChoice);

}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");

playGame(userChoice);
    });
});