import articlesTmpl from '../templates/articles.hbs';

const refs = {
  articlesList: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
};

const updateMarkup = articles => {
  const markup = articlesTmpl(articles);
  refs.articlesList.insertAdjacentHTML('beforeend', markup);
};

export default updateMarkup;
