const handOptions = {
    "rock": "assets/images/Rock.png",
    "paper": "assets/images/Paper.png",
    "scissors": "assets/images/Scissors.png",
    "lizard": "assets/images/Lizard.png",
    "spock": "assets/images/Spock.png"
  };
  
  let score = 0;
  let count =0;
  
  const pickUserHand = (hand) => {
    count++;
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];
  
    pickBotHand(hand);

    if(count === 5){
      document.getElementById("gameOver").classList.remove("display-none");
      document.getElementById('handContainer').classList.add('display-none');
      document.getElementById('contest').classList.add('display-none');
    }
  };
  
  const pickBotHand = (hand) => {
      let hands = ["rock", "paper", "scissors", "lizard", "spock"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[cpHand];
      
      result(hand, cpHand);
  };
  
  const result = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "paper" && cpHand == "lizard") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "spock") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }


    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "lizard") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "rock" && cpHand == "spock") {
      setDecision("YOU LOSE!");
    }

    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "scissors" && cpHand == "lizard") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "scissors" && cpHand == "spock") {
      setDecision("YOU LOSE!");
    }

    if (userHand == "lizard" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "lizard" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "lizard" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "lizard" && cpHand == "lizard") {
      setDecision("It's a tie!");
    }
    if (userHand == "lizard" && cpHand == "spock") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }

    if (userHand == "spock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "spock" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(score + 1);
    }
    if (userHand == "spock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "spock" && cpHand == "lizard") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "spock" && cpHand == "spock") {
      setDecision("It's a tie!");
    }
  };
  
  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  };
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  };
  
  const setScore = (newScore) => {
    score = newScore;
    document.querySelector(".score h2").innerText = newScore;
  };

 