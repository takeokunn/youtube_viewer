import { TEST } from 'Constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const test = () => action(TEST.ACTION);
