const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const itemList = [];
// images.map(item => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   liEl.append(imgEl);
//   itemList.push(liEl);
// })

// const list = document.querySelector("ul.gallery").append(...itemList);

const list = document.querySelector("ul.gallery");
list.style.listStyle = 'none';
list.style.display = 'flex';

const markup = images.map(image => `<li style='margin-right: 10px'><img src=${image.url} alt=${image.alt} width=500px></li>`).join("");

list.insertAdjacentHTML("beforeend", markup);
