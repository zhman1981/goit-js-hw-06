console.log('Number of categories: ' + document.querySelector('ul#categories').children.length);
const list = document.querySelectorAll('ul#categories li.item');
list.forEach(element => {
    console.log('Category: ' + element.querySelector('h2').textContent);
    console.log('Elements: ' + element.querySelector('ul').children.length);
});