import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from 'constants';

import { fetchArticles as fetch } from 'api/methods';

export function fetchArticles() {
  return (dispatch) => {
    dispatch({ type: FETCH_ARTICLES });

    fetch()
    .then(data => {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ARTICLES_ERROR,
        payload: err
      });
    });
  };
}
