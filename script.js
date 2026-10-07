const questionView = document.querySelector('#questionView');
const letterView = document.querySelector('#letterView');
const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');
const answerNote = document.querySelector('#answerNote');

function moveNoButton() {
  const area = noButton.parentElement.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, area.width - button.width);
  const maxY = Math.max(0, area.height - button.height);
  const currentX = noButton.offsetLeft;
  const currentY = noButton.offsetTop;
  let nextX = Math.random() * maxX;
  let nextY = Math.random() * maxY;

  if (Math.abs(nextX - currentX) < 90 && maxX > 90) nextX = (nextX + maxX / 2) % maxX;
  if (Math.abs(nextY - currentY) < 35 && maxY > 35) nextY = (nextY + maxY / 2) % maxY;

  noButton.style.position = 'absolute';
  noButton.style.left = `${nextX}px`;
  noButton.style.top = `${nextY}px`;
  answerNote.textContent = '¡Casi! Mejor prueba con el botón azul ♡';
}

noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener('focus', moveNoButton);
noButton.addEventListener('click', (event) => {
  event.preventDefault();
  moveNoButton();
});

function showLetter() {
  questionView.hidden = true;
  letterView.hidden = false;
  document.body.classList.add('letter-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

yesButton.addEventListener('click', showLetter);
document.querySelector('#backButton').addEventListener('click', () => {
  letterView.hidden = true;
  questionView.hidden = false;
  document.body.classList.remove('letter-open');
  yesButton.focus();
});
