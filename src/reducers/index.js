import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import newsReducer from './news';

const  rootReducer = combineReducers({
  news: newsReducer,
  router: routerReducer
});

export default rootReducer;