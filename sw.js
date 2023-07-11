const CACHE_NAME = 'cache-v1.8'

const FILES_TO_CACHE = [
  '/index.html',
  '/assets/script.js',
  '/assets/style.css',
  '/assets/logo.svg',
  '/assets/kimigayo.opus',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(FILES_TO_CACHE))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key)
        }
      }))
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      return response || fetch(event.request)
    }).catch(() => {
      return caches.match('/index.html')
    }
  ))
})
