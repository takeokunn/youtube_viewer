import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import test from './test.reducer';
import youtube from './youtube.reducer';

const reducers = combineReducers({
    toastr : toastrReducer,
    test,
    youtube
});

export default reducers;
