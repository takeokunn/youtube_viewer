const KEY = {
    PLAYLIST: 'KEY_PLAYLIST'
};

export const playlist = {
    get: () => localStorage.getItem(KEY.PLAYLIST),
    set: data => localStorage.setItem(KEY.PLAYLIST, data)
};
