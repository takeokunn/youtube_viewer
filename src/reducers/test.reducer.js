import { TEST }  from 'Constants/action_type.constant';

const initial_state = {};

const test = (state = initial_state, action) => {
    switch (action.type) {
    case TEST.ACTION:
        return { ...state };
    default:
        return { ...state };
    }
};

export default test;
