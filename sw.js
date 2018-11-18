// https://developers.google.com/web/ilt/pwa/lab-caching-files-with-service-worker

const filesToCache = [
  'offline.html',
  'css/offline.css',
  'favicon.ico',
  'img/katy-decorah@1000.webp',
  'img/katy-decorah@1000.jpg'
];

const staticCacheName = 'katydecorah-cache-v1';

self.addEventListener('install', event => {
  // console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  // console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          // console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        // console.log('Network request for ', event.request.url);
        return fetch(event.request).then(response => {
          return caches.open(staticCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(() => {
        // console.log('Error, ', error);
        return caches.match('offline.html');
      })
  );
});
