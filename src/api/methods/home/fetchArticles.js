import config from 'config';
import fetch from 'isomorphic-fetch';

export function fetchArticles() {
  const apiUrl = `${config.hipsterJesus}`;

  return fetch(apiUrl, {
    method: 'GET'
  })
  .then(res => {
    if (res.status) {
      return res.json();
    } else {
      throw new Error('Fetching articles error');
    }
  });
}
