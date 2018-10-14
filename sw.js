importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');


workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('\/'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('images\/.*\.*'),
    workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute([
    '/',
    '/manifest.json',
    '/index.html'
]);