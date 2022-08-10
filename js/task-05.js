const output = document.querySelector('span#name-output');
const input = document.querySelector('input#name-input');
const onChangeInput = (event) => {
    output.textContent = (event.currentTarget.value === '') ? 'Anonymous' : event.currentTarget.value;
}
input.addEventListener('input', onChangeInput);