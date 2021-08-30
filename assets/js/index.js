const handOptions = {
  "rock": "assets/images/Rock.png",
  "paper": "assets/images/Paper.png",
  "scissors": "assets/images/Scissors.png",
  "lizard": "assets/images/Lizard.png",
  "spock": "assets/images/Spock.png"
};

let score = 0;
let count = 0;

// when user clicks
const pickUserHand = (hand) => {
  count++;
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickBotHand(hand);

  // for ending the game
  if (count > 5) {
      document.getElementById("gameOver").classList.remove("display-none");
      document.getElementById('handContainer').classList.add('display-none');
      document.getElementById('contest').classList.add('display-none');
  }
};

// function for bot
const pickBotHand = (hand) => {
  let hands = ["rock", "paper", "scissors", "lizard", "spock"];
  let botHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image
  document.getElementById("computerPickImage").src = handOptions[botHand];
  result(hand, botHand);
};

// setting up the result
const result = (userHand, botHand) => {

  // Checking if userHand is Paper
  if ((userHand === "paper" && botHand === "rock") || (userHand === "paper" && botHand === "spock")) {
      setDecision("YOU WIN!");
      setScore(score + 1);
  }
  if ((userHand === "paper" && botHand === "scissors") || (userHand === "paper" && botHand === "lizard")) {
      setDecision("YOU LOSE!");
  }
  if (userHand === "paper" && botHand === "paper") {
      setDecision("It's a tie!");
  }

  // Checking if userHand is rock
  if ((userHand === "rock" && botHand === "scissors") || (userHand === "rock" && botHand === "lizard")) {
      setDecision("YOU WIN!");
      setScore(score + 1);
  }
  if ((userHand === "rock" && botHand === "paper") || (userHand === "rock" && botHand === "spock")) {
      setDecision("YOU LOSE!");
  }
  if (userHand === "rock" && botHand === "rock") {
      setDecision("It's a tie!");
  }

  // Checking if userHand is scissors
  if ((userHand === "scissors" && botHand === "paper") || (userHand === "scissors" && botHand === "lizard")) {
      setDecision("YOU WIN!");
      setScore(score + 1);
  }
  if ((userHand === "scissors" && botHand === "rock") || (userHand === "scissors" && botHand === "spock")) {
      setDecision("YOU LOSE!");
  }
  if (userHand === "scissors" && botHand === "scissors") {
      setDecision("It's a tie!");
  }

  // Checking if userHand is lizard
  if ((userHand === "lizard" && botHand === "paper") || (userHand === "lizard" && botHand === "spock")) {
      setDecision("YOU WIN!");
      setScore(score + 1);
  }
  if ((userHand === "lizard" && botHand === "scissors") || (userHand === "lizard" && botHand === "rock")) {
      setDecision("YOU LOSE!");
  }
  if (userHand === "lizard" && botHand === "lizard") {
      setDecision("It's a tie!");
  }

  // Checking if userHand is lizard

  if ((userHand === "spock" && botHand === "scissors") || (userHand === "spock" && botHand === "rock")) {
      setDecision("YOU WIN!");
      setScore(score + 1);
  }
  if ((userHand === "spock" && botHand === "paper") || (userHand === "spock" && botHand === "lizard")) {
      setDecision("YOU LOSE!");
  }
  if (userHand === "spock" && botHand === "spock") {
      setDecision("It's a tie!");
  }
};

// to restart game
const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

// for decsion making
const setDecision = (decision) => {
  document.querySelector(".decision h3").innerText = decision;
};

// setting score
const setScore = (newScore) => {
  score = newScore;
  document.querySelector(".score h2").innerText = newScore;
};