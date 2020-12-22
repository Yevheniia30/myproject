// ----------ПРОБНЫЙ ШАБЛОН ДЛЯ ДЗ 10-----------
import itemsTemplate from '../templates/gallery-items.hbs';

import dishesList from '../test.json';

console.log(dishesList);

const markup = itemsTemplate(dishesList);

console.log(markup);

const galleryRef = document.querySelector('.js-gallery');

galleryRef.insertAdjacentHTML('beforeend', markup);
// -----------разметка используя шаблонизацию HANDLEBARS-------------

// console.log(itemsTemplate);

// const markup = itemsTemplate({
//   items: ['HTML', 'CSS', 'JS', 'REACT'],
// });

// console.log(markup);

// const galleryRef = document.querySelector('.js-gallery');

// galleryRef.insertAdjacentHTML('beforeend', markup);
// -------РАЗМЕТКА ИСПОЛЬЗУЯ insertAdjacentHTML---------------
// const tech = ['HTML', 'CSS', 'JS', 'REACT'];

// const galleryRef = document.querySelector('.js-gallery');

// проходим по массиву и создаем разметку в консоли
// const markup = tech
//   .map(elem => `<li><a href="">Hello, ${elem}</a></li>`)
//   .join('');

// console.log(markup);

// создаем разметку в html
// galleryRef.insertAdjacentHTML('beforeend', markup);
