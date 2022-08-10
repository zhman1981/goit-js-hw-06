let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const dec = () => {
    counterValue -= 1;
    document.querySelector('span#value').textContent = counterValue;
}
decrement.addEventListener('click', dec);
const increment = document.querySelector('button[data-action="increment"]');
const inc = () => {
    counterValue += 1;
    document.querySelector('span#value').textContent = counterValue;
}
increment.addEventListener('click', inc);
