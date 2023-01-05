//player object
let player = {
  name: "Ashley",
  chips: 10,
};
//variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
//get player name
/*let playerName = prompt("Please enter your name");
if (playerName != null) {
  let playerEl = document.querySelector("#player-el");
  playerEl.textContent = "Player: " + playerName;
}*/

//display player name and chips
playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
  //generate random number 1 - 13
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //convert 1 to 11(ace, high) and 11,12,13 to 10(Jack, queen, king)
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
//onclick start button
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // renders out all the cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
//onclick new card button
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push new card to cards array
    cards.push(card);
    renderGame();
    //cards.pop() removes array?
  }
}
