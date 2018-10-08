import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';

import reducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(middleware, thunk);
  }
  return applyMiddleware(middleware, createLogger(), thunk);
};

export default createStore(reducer, composeWithDevTools(getMiddleware()));