const CACHE_NAME = 'static-cache-v1';

// Add list of files to cache here.
const assets = [
  '/',
  '/index.html',
  '/assets/index-758b3bbf.js',
  '/assets/index-ddea4aa9.css',
  '/assets/logo-ec97bbf0.svg',
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})