import fetchArticles from './fetch-articles';
import updateMarkup from './update-markup';

const refs = {
  articlesList: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  console.log(inputValue);
  refs.articlesList.innerHTML = '';
  form.reset();
  console.log(event.currentTarget.elements.query.value);
  fetchArticles(inputValue).then(updateMarkup);
});
