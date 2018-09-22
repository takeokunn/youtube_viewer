import { TEST }  from 'Constants/action_type.constant';

const initialState = {}

const test = (state = initialState, action) => {
    switch (action.type) {
    case TEST.ACTION:
        return { ...state };
    default:
        return { ...state };
    }
};

export default test;
