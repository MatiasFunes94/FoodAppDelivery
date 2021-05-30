import {
  all,
  fork,
} from 'redux-saga/effects';

// import authSagas from './auth';
import modalSagas from './modal';

export default function* rootSaga() {
  yield all([
    // fork(authSagas),
    fork(modalSagas),
  ]);
}
