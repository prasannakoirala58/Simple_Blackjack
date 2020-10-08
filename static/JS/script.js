//Challenge 1: Your Age in Days

let d = new Date();
let y = d.getFullYear();

function ageInDays() {
  let birthYear = prompt("What year were you born on...Good friend??");
  let ageInDayss = (y - birthYear) * 365;
  for (let i = birthYear; i <= y; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      ageInDayss++;
    }
  }
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");

  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//Challenge 2: Cat Generator:

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

//Challenge 3: Rock,Paper,Scissors:

function rpsGame(yourChoice) {
  console.log(yourChoice.src);

  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randomNumGen());
  console.log("computerChoice:", botChoice);

  results = decideWinner(humanChoice, botChoice); // must return array like...[0,1]=youlost [1,0]=youwon,[0.5,0.5]=youtied
  console.log(results);

  message = finalMessage(results); //{'message': 'youwon!' 'color':'green'}
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomNumGen() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  //lets remove all the images on click...

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDIv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDIv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 6px 14px 27px 0px rgba(37, 50, 244, 1)'>";

  messageDiv.innerHTML =
    "<h1 style= 'color:" +
    finalMessage["color"] +
    "; font-size:60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 6px 14px 27px 0px rgba(243, 38, 24, 1)'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDIv);

  document.getElementById("flex-box-rps-div").appendChild(messageDiv);

  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4: Change the color of all buttons!

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThing) {
  if (buttonThing.value === "red") {
    buttonRed();
  } else if (buttonThing.value === "blue") {
    buttonBlue();
  } else if (buttonThing.value === "green") {
    buttonGreen();
  } else if (buttonThing.value === "reset") {
    buttonColorReset();
  } else if (buttonThing.value === "random") {
    randomColor();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonBlue() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-primary");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColor() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    var choices = [
      "btn-primary",
      "btn-danger",
      "btn-success",
      "btn-secondary",
      "btn-dark",
      "btn-info",
      "btn-warning",
    ];

    all_buttons[i].classList.add(choices[Math.floor(Math.random() * 7)]);
  }
}

//Challenge 5: Blackjack

let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
  wins: 0,
  loss: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame.you;
const DEALER = blackjackGame["dealer"];
const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const loseSound = new Audio("static/sounds/aww.mp3");

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit);

document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);

document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;
    let yourImages = document.querySelector("#your-box").querySelectorAll("img");
    let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");

    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (let i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#blackjack-result").textContent = "Let's play!";

    document.querySelector("#your-blackjack-result").style.color = "#ffffff";
    document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";
    document.querySelector("#blackjack-result").style.color = "black";

    blackjackGame["turnsOver"] = true;
  }
}

function updateScore(card, activePlayer) {
  //If adding Ace keeps me below or equals to 11 add 11 else add 1...
  if (card === "A") {
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}
function showScore(activePlayer) {
  if (activePlayer["score"] >= 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  blackjackGame["turnsOver"] = true;
  let winner = computeWinner();
  showResult(winner);
}

//compute winner and return who just won AND,
//update the wins, draws and losses in the leaderboards:

function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    //condition: higher score than dealer or when dealer busts but you are under or equals to 21..
    if (YOU["score"] > DEALER["score"] && DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["loss"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
    //condition: user busts but dealer doesnt...
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["loss"]++;
    winner = DEALER;
    //condition: when you and the dealer both busts...
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  console.log("Winner is", winner);
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "YOU WON!";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["loss"];
      message = "YOU LOST!";
      messageColor = "red";
      loseSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      message = "YOU DREW!";
      messageColor = "blue";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}
