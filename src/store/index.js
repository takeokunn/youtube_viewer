import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducers from 'Reducers/';

const configureStore = () => {
    const middlewares = [];

    // for redux-saga
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    // for redux-logger
    if (process.env.NODE_ENV === 'develop') {
        const loggerMiddleware = createLogger();
        middlewares.push(loggerMiddleware);
    }

    return {
        ...createStore(
            reducers,
            applyMiddleware(...middlewares)
        ),
        runSaga: sagaMiddleware.run
    };
};

export default configureStore;
