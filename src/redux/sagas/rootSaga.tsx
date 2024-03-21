import { all, fork } from '@redux-saga/core/effects';

import userSaga from './user/UserSaga';

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
