import { STORAGE } from 'Constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const playlist = data => action(STORAGE.PLAYLIST, { data: data });
