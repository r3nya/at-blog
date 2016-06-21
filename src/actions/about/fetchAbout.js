import {
  FETCH_ABOUT,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_ERROR
} from 'constants';

import { fetchAbout as fetch } from 'api/methods';

export function fetchAbout() {
  return (dispatch) => {
    dispatch({ type: FETCH_ABOUT });

    fetch()
    .then(data => {
      dispatch({
        type: FETCH_ABOUT_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ABOUT_ERROR,
        payload: err
      });
    });
  };
}
