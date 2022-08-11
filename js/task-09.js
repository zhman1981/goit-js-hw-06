function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button.change-color');

const onButtonClick = (event) => {
  const bodyColor = document.querySelector('body');
  bodyColor.style.backgroundColor = getRandomHexColor();
  const spanText = document.querySelector('span.color');
  spanText.textContent = bodyColor.style.backgroundColor;
}

button.addEventListener('click', onButtonClick);