// for service worker
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
const registration = runtime.register();
registration.then(register => register.update());

// for web application
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import 'node_modules/react-redux-toastr/src/styles/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faThumbsUp, faThumbsDown, faTimesCircle, faEye, faComment } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faThumbsUp, faThumbsDown, faTimesCircle, faEye, faComment);

import Search from 'Containers/search/';
import ReplayList from 'Containers/replay_list/';
import MovieList from 'Containers/movie_list/';

import './bootstrap.css';
import styles from './index.css';

import sagas from 'Sagas';
import configureStore from 'Store';

const store = configureStore();
store.runSaga(sagas);

render((
    <Provider store={ store }>
        <main>
            <ReplayList />
            <div className={ styles.right_block }>
                <Search />
                <MovieList />
            </div>
            <ReduxToastr
                timeOut={ 4000 }
                newestOnTop={ false }
                preventDuplicates
                position="bottom-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick />
        </main>
    </Provider>
), document.getElementById('root'));
