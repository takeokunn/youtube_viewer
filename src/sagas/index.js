import { fork, all } from 'redux-saga/effects';

import testSaga from './test.saga';

function* rootSaga() {
    yield all([
        fork(testSaga)
    ]);
}

export default rootSaga;
