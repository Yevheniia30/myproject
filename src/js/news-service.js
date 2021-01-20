const apiKey = '9bde886b859e4fbd80ed164de598bb99';

export default {
  searchQuery: '',
  page: 1,
  fetchArticles() {
    const url = `http://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}&domains=eg bbc.co.uk, techcrunch.com, engadget.com`;

    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return (
      fetch(url, options)
        .then(response => response.json())
        // .then(({ articles }) => updateMarcup(articles))
        .then(({ articles }) => {
          this.page += 1;
          return articles;
        })
        .catch(error => console.log(error))
    );
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
