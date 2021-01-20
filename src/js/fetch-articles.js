const apiKey = '9bde886b859e4fbd80ed164de598bb99';

const fetchArticles = (searchQuery, page = 1) => {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=20&page=${page}&domains=eg bbc.co.uk, techcrunch.com, engadget.com`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return (
    fetch(url, options)
      .then(response => response.json())
      // .then(({ articles }) => updateMarcup(articles))
      .then(({ articles }) => articles)
      .catch(error => console.log(error))
  );
};

export default fetchArticles;
