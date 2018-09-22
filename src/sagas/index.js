import { fork, all } from 'redux-saga/effects';

import testSaga from './test.saga';
import youtubeSaga from './youtube.saga';

function* rootSaga() {
    yield all([
        fork(testSaga),
        fork(youtubeSaga)
    ]);
}

export default rootSaga;
