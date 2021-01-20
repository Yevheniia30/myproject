import newsService from './news-service';
import newService from './news-service';
import updateMarkup from './update-markup';

const refs = {
  articlesList: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
  showMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newService.query = form.elements.query.value;
  // console.log(inputValue);
  refs.articlesList.innerHTML = '';
  form.reset();

  newsService.resetPage();

  refs.showMoreBtn.classList.add('is-hidden');

  console.log(event.currentTarget.elements.query.value);

  newService.fetchArticles(searchQuery).then(articles => {
    updateMarkup(articles);
    refs.showMoreBtn.classList.remove('is-hidden');
  });
});

refs.showMoreBtn.addEventListener('click', () => {
  newService.fetchArticles(searchQuery).then(articles => {
    updateMarkup(articles);
    refs.showMoreBtn.classList.remove('is-hidden');
  });
});
