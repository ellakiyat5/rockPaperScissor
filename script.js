let playGame =confirm("Shall we play?");
if(playGame){
    let playerChoice=prompt("please enter rock ,paper or scissor.");
    if(playerChoice){
        playerOne=playerChoice.trim().toLowerCase();
        if(playerOne==="rock"||playerOne==="paper"||playerOne==="scissor"){
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer=computerChoice===1?"rock":computerChoice===2?"paper":"scissor";
            let result=
              playerOne===computer
                ?"Tie"
                :playerOne==="rock"&& computer==="paper"?`playerOne : ${playerOne}\n computer : ${computer} \n Computer WINS `
              
                :playerOne==="paper"&& computer==="scissor"?`playerOne : ${playerOne}\n computer : ${computer} \n Computer WINS `
               
               
               
           
                :playerOne==="scissor"&& computer==="rock"
                ?`playerOne : ${playerOne}\n computer : ${computer} \n Computer WINS `
              
                :`playerOne : ${playerOne}\n computer : ${computer} \n Player WINS `;
            alert(result);
            let playAgain=confirm("Play again?");
            playAgain? location.reload():alert("OK, thanks for playing");

        }else{
            alert("You didn't enter rock,paper or scissor.");
        }

    }else{
        alert("I guess you changed your mind. Maybe next time.");
    }
}else{
    alert("OK, maybe next time.");
}