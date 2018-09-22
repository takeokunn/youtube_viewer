const KEY_NAME ='TAKEOKUNN_YOUTUBE_VIEWER'

export const get = () => localStorage.get(KEY_NAME);
export const set = data => localStorage.set(KEY_NAME, data);
