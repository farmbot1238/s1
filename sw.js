const CACHE_NAME = 'lmjo09-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/config.js',
    '/manifest.json',
    '/images/favicon.ico',
    '/images/icon-72.png',
    '/images/icon-96.png',
    '/images/icon-128.png',
    '/images/icon-144.png',
    '/images/icon-152.png',
    '/images/icon-192.png',
    '/images/icon-384.png',
    '/images/icon-512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
