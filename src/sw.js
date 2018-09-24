const CACHE_NAME = 'youtube-viewer-cache-v1';

self.addEventListener('install', event => {
    const initialize = () => caches.open(CACHE_NAME).then(cache => cache.addAll(['bundle.js']));
    event.waitUntil(initialize());
});

self.addEventListener('activate', event => {
    const delete_cache = () => caches.delete(CACHE_NAME);
    event.waitUntil(delete_cache());
});

self.addEventListener('fetch', event => {
    const fetch_with_cache = () => caches.match(event.request).then(response => response || fetch(event.request));
    event.respondWith(fetch_with_cache());
});
