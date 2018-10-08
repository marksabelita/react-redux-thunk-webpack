import { FETCH_NEWS, GET_NEWS } from '../actions/type'

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload, loading: false }
    case GET_NEWS:
      return { ...state, loading: true }
    default:
      return state;
  }
}