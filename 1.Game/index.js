let playerScore = 0;
      let comScore = 0;

      function play(playerChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice) {
          result = "It's a Tie!";
          
        } else if (
          (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "scissors" && computerChoice === "paper")
        ) {
          result = "You Won!";
          
          playerScore++;
        } else {
          result = "You Lose!" ;
         
          comScore++;
        }

        const resultBox = document.getElementById("result");
        
        resultBox.textContent = result;

        document.getElementById(
          "score"
        ).textContent = `Your Score: ${playerScore} | Computer Score: ${comScore}`;
      }