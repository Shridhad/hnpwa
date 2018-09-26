importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');


workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('\/'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.cacheFirst()
);

workbox.precaching.precacheAndRoute([
    '/',
    '/manifest.json',
    '/index.html'
]);