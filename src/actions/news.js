const axios = require('axios');
import { FETCH_NEWS, ITEMS_HAS_ERRORED, ITEMS_IS_LOADING } from './type';

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    payload: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    payload: bool
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: FETCH_NEWS,
    payload: items
  };
}

export function getNews() {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    axios.get("https://newsapi.org/v1/articles?source=cnn&apiKey=412763ae9691483592fec71c0a976f1a")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}