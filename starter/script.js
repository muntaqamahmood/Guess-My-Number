let tries = 20;
let secretNumber = Math.floor(Math.random() * 20);
function resetGame() {
  const checkBtn = document.querySelector('.btn.check');
  checkBtn.disabled = false;

  tries = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.message').innerHTML = 'Start guessing...';
}
window.onload = function () {
  // Your code here
  'use strict';
  console.log(secretNumber);
  const guess = document.querySelector('.guess');
  const checkBtn = document.querySelector('.btn.check');
  checkBtn.addEventListener('click', function () {
    console.log(checkBtn.disabled);
    const guessedVal = Number(guess.value); // input.value
    const hs = document.querySelector('.highscore').innerHTML;
    if (guessedVal === secretNumber) {
      tries--;
      if (tries > Number(hs)) {
        document.querySelector('.highscore').innerHTML = tries;
      }
      document.querySelector('.message').innerHTML =
        'You guessed it! Click Again!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.score').innerHTML = tries;
      //   tries = 20;
      document.querySelector('.score').innerHTML = tries;
      checkBtn.disabled = true;
    } else if (guessedVal > secretNumber) {
      tries--;
      document.querySelector('.message').innerHTML = 'You guessed too HIGH!';
      document.querySelector('.score').innerHTML = tries;
    } else {
      tries--;
      document.querySelector('.message').innerHTML = 'You guessed too LOW!';
      document.querySelector('.score').innerHTML = tries;
    }
  });
  document.querySelector('.btn.again').addEventListener('click', function () {
    resetGame();
  });
};
