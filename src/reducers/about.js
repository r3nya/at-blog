import {
  FETCH_ABOUT,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_ERROR
} from 'constants';

const initialState = {
  loading: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_ABOUT:
    return {
      ...state,
      loading: true
    };

  case FETCH_ABOUT_SUCCESS:
    return {
      ...state,
      loading: false,
      text: payload.text
    };

  case FETCH_ABOUT_ERROR:
    return {
      ...state,
      loading: false,
      error: payload.err
    };

  default:
    return state;
  }
}
