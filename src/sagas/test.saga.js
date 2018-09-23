import { fork, take, all } from 'redux-saga/effects';

import { TEST }  from 'Constants/action_type.constant';

function* handleTest() {
    for(;;) {
        yield take(TEST.ACTION);
        yield console.log('test saga');
    }
}

function* testSaga() {
    yield all([
        fork(handleTest)
    ]);
}

export default testSaga;
