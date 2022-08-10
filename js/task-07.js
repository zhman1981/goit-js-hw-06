const size = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');
const onChangeSize = (event) => {
    spanText.style.fontSize = event.currentTarget.value+'px';
}
size.addEventListener('input', onChangeSize);