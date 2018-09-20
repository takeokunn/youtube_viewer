import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/font-awesome/css/font-awesome.css';

import sagas from 'Sagas';
import { test } from 'Actions';
import configureStore from 'Store';

const store = configureStore();
store.runSaga(sagas);
store.dispatch(test.test())

render(
    <Provider store={ store }>
        <p>dsafsafds</p>
    </Provider>
, document.getElementById('root'));
