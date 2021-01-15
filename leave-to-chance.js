const resultSection = document.getElementById('result-section');
const resultSpan = document.getElementById('random-pick');

const makeRandomPick = () => {
  resultSection.hidden = true;
  let randomPick = 0;
  let numberOfOptions = document.getElementById('input-options').value || 2;

  setTimeout(() => {
    numberOfOptions = parseInt(numberOfOptions);
    randomPick = Math.floor(Math.random() * numberOfOptions) + 1;
    resultSpan.textContent = randomPick.toString();
    resultSection.hidden = false;
  }, 300);
};
