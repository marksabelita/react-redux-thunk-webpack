import {
  FETCH_NEWS,
  ITEMS_IS_LOADING,
  ITEMS_HAS_ERRORED,
} from '../actions/type'

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload }
    case ITEMS_IS_LOADING:
      return { ...state, loading: action.payload }
    case ITEMS_HAS_ERRORED:
      return { ...state, loading: action.payload }
    default:
      return state;
  }
}