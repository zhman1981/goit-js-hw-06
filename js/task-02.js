const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemList = [];
ingredients.map(item => {
  const el = document.createElement('li');
  el.textContent = item;
  el.classList.add('item');
  itemList.push(el);
})

const list = document.querySelector('ul#ingredients').append(...itemList);