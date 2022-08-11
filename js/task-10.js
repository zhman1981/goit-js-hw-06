function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const divBoxes = document.querySelector('div#boxes');
  const squares = [];
  let size = 30;
  for (let i = 0; i < amount; i+=1) {
    const div = document.createElement('div');
    div.style.width = size+"px";
    div.style.height = size+"px";
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    squares.push(div);
  }
  divBoxes.append(...squares);
}

const destroyBoxes = () => {
  const divBoxes = document.querySelectorAll('div#boxes div');
  divBoxes.forEach(div => {
    div.remove();
  });
}

const input = document.querySelector('input');
let amountInput = 0;
const onChangeInput = (event) => {
  amountInput = input.value;
}
input.addEventListener('change', onChangeInput);

const createBtn = document.querySelector("[data-create]");

const onClickCreateBtn = (event) => {
  createBoxes(amountInput);
}

createBtn.addEventListener('click', onClickCreateBtn);

const destroyBtn = document.querySelector("[data-destroy]");

const onClickDestroyBtn = (event) => {
  destroyBoxes();
}

destroyBtn.addEventListener('click', onClickDestroyBtn);