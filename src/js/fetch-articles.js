const apiKey = '9bde886b859e4fbd80ed164de598bb99';

const fetchArticles = searchQuery => {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return (
    fetch(url, options)
      .then(response => response.json())
      // .then(({ articles }) => updateMarcup(articles))
      .then(data => console.log(data))
      .catch(error => console.log(error))
  );
};

export default fetchArticles;
