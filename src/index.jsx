import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Search from 'Containers/search/';
import ReplayList from 'Containers/replay_list/';
import MovieList from 'Containers/movie_list/';

// for font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

import './bootstrap.css';
import styles from './index.css';

import sagas from 'Sagas';
import { test } from 'Actions';
import configureStore from 'Store';

const store = configureStore();
store.runSaga(sagas);
store.dispatch(test.test())

render(
    <Provider store={ store }>
        <main>
            <ReplayList />
            <div className={ styles.right_block }>
                <Search />
                <MovieList />
            </div>
        </main>
    </Provider>
, document.getElementById('root'));
