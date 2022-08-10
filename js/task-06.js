const input = document.querySelector('input#validation-input');
const onBlurInput = (event) => {
    if (event.currentTarget.value.length == input.dataset.length) {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
        input.classList.add('valid');
    } else {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        input.classList.add('invalid');
    }
}
input.addEventListener('blur', onBlurInput);