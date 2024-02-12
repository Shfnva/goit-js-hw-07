function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-action="create"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(fragment);

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes); // all ментор пише що правильно, я не розумію чому сайт видає помилку :(