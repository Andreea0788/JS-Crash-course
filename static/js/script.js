//Project 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("What year were you born... Good friend?");
    var ageInDayss = (new Date().getFullYear() - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
  }

function reset() {
    document.getElementById('ageInDays').remove();
}


//Project 2: Cat Generator

function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
  image.setAttribute('class', 'classCatImages');
  div.appendChild(image);
}

function clearSingleCat() {
  document.querySelectorAll('.classCatImages')[0].remove();
  }

function clearAllCats() {
  var elements = document.getElementsByClassName('classCatImages');
  while(elements.length > 0){
  elements[0].parentNode.removeChild(elements[0]);
  }
  } 

//Project 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice= numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message); 
  
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1,'rock': 0.5, 'paper':0},
    'paper': {'rock ': 1,'paper': 0.5, 'scissors':0,},
    'scissors': {'paper': 1,'scissors': 0.5, 'rock':0},
  };

  var yourScore=rpsDatabase[yourChoice][botChoice];
  var botScore=rpsDatabase[botChoice][yourChoice];

  return[yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if(yourScore === 0.5) {
    return{'message': 'You tied!', 'color': 'yellow'};
  }else {
    return{'message': 'You won!', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase =  {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
  }

  // remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var messageDiv = document.createElement('div');
  var botDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px padding 30px; '>" + finalMessage['message'] + "<h1>";
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
  
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Project 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');

var copy_allButtons = [];
for(let i=0; i < all_buttons.length; i++) {
  copy_allButtons.push(all_buttons[i].classList[1]);
}
console.log(copy_allButtons);

function buttonColorChange(buttonThingy) {
  if(buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'yellow') {
    buttonsYellow();
  }else if (buttonThingy.value === 'green') {
    buttonsGreen();
  }else if (buttonThingy.value === 'blue') {
    buttonsBlue();
  }else if (buttonThingy.value === 'reset') {
    buttonsReset();
  }else if (buttonThingy.value === 'random') {
    buttonsRandom();
  }
}

function buttonsRed() {
  for (let i=0; i < all_buttons.length; i ++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsYellow() {
  for (i=0; i < all_buttons.length; i ++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-warning');
  }
}

function buttonsGreen() {
  for (i=0; i < all_buttons.length; i ++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
  
}

function buttonsBlue(){
  for (i=0; i<all_buttons.length; i ++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-primary');
  }
}

function buttonsReset(){
  for (i=0; i < all_buttons.length; i ++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copy_allButtons[i]);
  }
}

function buttonsRandom(){
  var choices= ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
  for ( i=0; i < all_buttons.length; i ++) {
    var randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

//Project 5: Blackjack

//Main function / states of the game
let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
  'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8':8, '9': 9, '10': 10, 'Q':10, 'J': 10, 'K': 10, 'A': [1, 11]},
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'isStand': false,
  'turnsOver': false,
};

//Variable You-Player (constant the whole game)
const YOU = blackjackGame['you'];
//Variable Dealer-Player (constant the whole game)
const DEALER = blackjackGame['dealer'];

//Play sound when click on Hit
const hitSound = new Audio('static/sounds/swish.m4a');

//Play sound when you are the winner
const winSound = new Audio('static/sounds/cash.mp3');

// Play sound when you lose
const lossSound = new Audio('static/sounds/aww.mp3')

//Event listeners for HIT, STAND and DEAL buttons
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)

// Hit button
function blackjackHit() {
  // button should be hit only if stand button was not clicked
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    //console.log(card);
    showCard(card,YOU);
    updateScore(card, YOU);
    showScore(YOU);
    //console.log(YOU['score']);
  }
}

// Pick random cards
function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

// Show random cards to the frontend
function showCard(card, activePlayer) {
  if(activePlayer['score'] <= 21) {
    //create the image element in HTML
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

// Deal button
function blackjackDeal() {

  // set the turnsOver to true and play the game
  if (blackjackGame ['turnsOver'] === true) {

    // set the stand mode to false and play the game
    blackjackGame['isStand'] = false;
    
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    // You-Player: Remove images, when click on DEAL
    for(i=0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    // Dealer-Player: Remove images, when click on DEAL
    for (i=0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    // Reset the score internally, when click on DEAL
    YOU['score'] = 0;
    DEALER['score'] = 0;
    // Reset the score to the frontend, when click on DEAL
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = '#ffffff';

    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

    // Reset the h3 to "Let's play!", once the Deal button is pressed after the game
    document.querySelector('#blackjack-result').textContent = "Let's play!";
    document.querySelector('#blackjack-result').style.color = 'black';

    // deactivate turnsOver, once the game was played again/restart the game completely
    blackjackGame['turnsOver'] = true;
  }
  
}

// Update the score (backend)
function updateScore(card, activePlayer) {
  //Check if the card is an A
  if(card==='A') {
     //If adding 11 keeps me below 21, add 11. Otherwise add 1
    if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    } 
  // If the card wasn't even A in the first place, increment it by the card's value
  } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

// Update the score (frontend)
function showScore(activePlayer) {
  //If the score is greater than 21, show BUST!, otherwise show the current score of the activePlayer
  if(activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

// Second player -> the Dealer

// Sleep function, with promise object, so that the dealer drws cards one by one, until it has 16 points or more
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  // Activate Stand mode, once the player hits the stand button
  blackjackGame['isStand'] = true;

  //the bot needs to play all his moves
  while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    //wait 1000 ms before drawing the next card
    await sleep(1000);
  }

 

  // All the turns are over, once the dealer is over 15
  blackjackGame['turnsOver'] = true;
  let winner = computeWinner();
  showResult(winner);
  //console.log(blackjackGame['turnsOver']);
}

// Compute winner and return who just won
// Update the wins, draws and losses in the table below the game board
function computeWinner() {
  let winner;

  if (YOU['score'] <=21) {
    // condition: higher score than DEALER or when DEALER busts but you're 21 or under
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
      //console.log ('You won!')
      blackjackGame['wins']++;
      winner = YOU;

    // condition: dealer's score is higher than your score
    } else if (YOU['score'] < DEALER['score']) {
      //console.log('You lost!')
      blackjackGame['losses']++;
      winner = DEALER;

    // condition: your score and dealer's score are equal
    } else if (YOU['score'] === DEALER ['score']) {
      //console.log('You drew!');
      blackjackGame['draws']++;
    }

  // condition: when user busts, but dealer doesn't
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses'] ++;
    //console.log('You lost!');
    winner = DEALER;

  // condition: when you AND the dealer busts
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackGame['draws']++;
    //console.log('You drew');
  }

  console.log(blackjackGame);
  return winner; 
}


// Show if you won, lost or you drew. Color the messages accordingly
function showResult(winner) {
  let message, messageColor;

  //don't show result, unbtil all the turns are over
  if (blackjackGame['turnsOver'] === true) {
    if (winner === YOU) {
      document.querySelector('#wins').textContent = blackjackGame['wins'];
      message = 'You won!';
      messageColor = 'green';
      winSound.play();
  
    } else if (winner === DEALER) {
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You lost!';
      messageColor = 'red';
      lossSound.play();
  
  } else {
    document.querySelector('#draws').textContent = blackjackGame['draws'];
    message = 'You drew!';
    messageColor = 'black';
    }
  
    // Update the result on the frontend (h3)
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
  } 
}

//Project 6: Random User Generator

// Get 10 random users. Website: randomuser.me. For each user, you have an API
const url = 'https://www.randomuser.me/api/?results=10';
fetch(url)
  .then(resp => resp.json())    //Turn data into json data
  .then(data => {
    let authors = data.results;
    console.log(authors);
    for (i=0; i<authors.length; i++) {
      let div = document.createElement('div');
      let image = document.createElement('img');
      let p = document.createElement('p');
      p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
      image.src = authors[i].picture.large;
      div.appendChild(image);
      div.appendChild(p);
      document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);  
    }
  });

  let title = str => str[0].toUpperCase() + str.slice(1);

function user() {
    return '5'
  }
  user()
