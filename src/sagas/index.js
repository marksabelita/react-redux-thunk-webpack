import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_NEWS, FETCH_NEWS } from '../actions/type';

function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=412763ae9691483592fec71c0a976f1a').then(response => response.json());
  yield put({type: FETCH_NEWS, payload: json.articles});
}

function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}