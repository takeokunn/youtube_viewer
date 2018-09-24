const KEY = {
    PLAYLIST: 'KEY_PLAYLIST_V1'
};

export const playlist = {
    get: () => localStorage.getItem(KEY.PLAYLIST),
    set: data => localStorage.setItem(KEY.PLAYLIST, data)
};
