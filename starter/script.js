let tries = 20;
let secretNumber = 0;
function resetGame() {
  secretNumber = Math.floor(Math.random() * 20);
  const checkBtn = document.querySelector('.btn.check');
  checkBtn.disabled = false;
  tries = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
}
window.onload = function () {
  secretNumber = Math.floor(Math.random() * 20);
  // Your code here
  ('use strict');
  console.log(secretNumber);
  const guess = document.querySelector('.guess');
  const checkBtn = document.querySelector('.btn.check');
  checkBtn.addEventListener('click', function () {
    console.log(checkBtn.disabled);
    const guessedVal = Number(guess.value); // input.value
    const hs = document.querySelector('.highscore').innerHTML;
    // no input
    if (!guessedVal) {
      document.querySelector('.message').innerHTML = '⛔ No Number!';
    }
    // correct
    else if (guessedVal === secretNumber) {
      tries--;
      // highscore logic
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
      document.querySelector('.number').textContent = secretNumber;
    }
    // too high guess
    else if (guessedVal > secretNumber) {
      if (tries > 1) {
        tries--;
        document.querySelector('.message').innerHTML = 'You guessed too HIGH!';
        document.querySelector('.score').innerHTML = tries;
      } else {
        document.querySelector('.message').innerHTML =
          'You are out of tries! Try Again!';
        document.querySelector('.score').innerHTML = tries;
      }
    }
    // too low guess
    else {
      if (tries > 1) {
        tries--;
        document.querySelector('.message').innerHTML = 'You guessed too LOW!';
        document.querySelector('.score').innerHTML = tries;
      } else {
        document.querySelector('.message').innerHTML =
          'You are out of tries! Try Again!';
        document.querySelector('.score').innerHTML = tries;
      }
    }
  });
  document.querySelector('.btn.again').addEventListener('click', function () {
    resetGame();
  });
};
