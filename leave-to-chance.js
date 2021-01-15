const resultSection = document.getElementById('result-section');
const resultSpan = document.getElementById('random-pick');

const makeRandomPick = () => {
  resultSection.hidden = true;
  // resultSection.classList.remove('animate__animated animate__rubberBand');
  let randomPick = 0;
  let numberOfOptions = document.getElementById('input-options').value || 2;

  setTimeout(() => {
    numberOfOptions = parseInt(numberOfOptions);
    randomPick = Math.floor(Math.random() * numberOfOptions) + 1;
    resultSpan.textContent = randomPick.toString();
    //resultSection.classList.add('animate__animatedanimate__rubberBand');
    resultSection.hidden = false;
  }, 300);
};
