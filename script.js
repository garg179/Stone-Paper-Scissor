let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
compscorepara = document.querySelector("#comp_score");

const gencompchoice =() => {
   const options = ["rock","paper","scissor"];
   const randidx =  Math.floor(Math.random()*options.length);
   return options[randidx];
}

const showWinner = (userWin , userchoice,compchoice) => {
    if (userWin === true){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
}
}
const playGame = (userchoice)  => {
    // generate computer choice
    const compchoice = gencompchoice();

    if (userchoice === compchoice){
        msg.innerText = "Game was tie! Play Again";
        msg.style.backgroundColor = "#081b31";

    }else{
        let userWin = true;
        if (userchoice === "rock"){
            // paper , scissor
            userWin = compchoice === "paper" ? false : true;
        }else if  (userchoice === "paper"){
            //  scissor , rock
            userWin = compchoice === "scissor" ? false : true;
        }else{
            //scissor
            // rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice,compchoice);

    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});