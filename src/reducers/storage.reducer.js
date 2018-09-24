import { STORAGE } from 'Constants/action_type.constant';

import { storage } from 'Services/';

const initial_state = {};

const storage_reducer = (state = initial_state, action) => {
    switch (action.type) {
    case STORAGE.PLAYLIST:
        storage.playlist.set(JSON.stringify(action.payload.data));
        return { ...state };
    default:
        return { ...state };
    }
};

export default storage_reducer;
