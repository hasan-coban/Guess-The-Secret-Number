'use strict';
//defining some variables
const btn = document.querySelector('.check');
const btnAgain = document.querySelector('.btn-play');
const message = document.querySelector('.message');

let secretNumber = Math.trunc(Math.random() * 15) + 1;
//created to avoid repetition
function displayMessage(showMessage) {
  message.textContent = showMessage;
}
let score = 20;
let highscore = 0;
btn.addEventListener('click', function () {
  const guessedNum = Number(document.querySelector('.guess').value);

  //if there is no content pass into input
  if (!guessedNum) {
    displayMessage('⛔ Please Enter a Number');
  } else if (guessedNum === secretNumber) {
    displayMessage('Woow I made it🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundImage = "url('giphy 2.gif') ";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center bottom';
    document.body.style.backgroundSize = '500px 500px';

    // document.querySelector('body').style.backgroundColor = 'crimson';
    document.querySelector('.number').style.width = '25rem';
    if (score > highscore) {
      document.querySelector('.s-highscore').textContent = score;
      highscore = score;
    }
  } else if (guessedNum !== secretNumber) {
    guessedNum > secretNumber
      ? displayMessage('Please try a smaller number')
      : displayMessage('Please try  a bigger number');
    score--;
    document.querySelector('.s-score').textContent = score;
  } else if (guessedNum < secretNumber) {
    displayMessage('Please try  a bigger number');
    score--;
    document.querySelector('.s-score').textContent = score;
  } else if (guessedNum < secretNumber) {
    displayMessage('Please try  a bigger number');
    score--;
    document.querySelector('.s-score').textContent = score;
  } else {
    displayMessage('You lost the Game.Try Again please');
    document.querySelector('.s-score').textContent = score;
  }
});

btnAgain.addEventListener('click', function () {
  document.querySelector('.s-score').textContent = 20;
  document.querySelector('.s-highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent =
    'Start Guessing the Number...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#008080';
  document.querySelector('.number').style.width = '6rem';
});
