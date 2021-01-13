const pwaCache = 'pwa-cache-2'

self.addEventListener('install', e => {
  let cacheReady = caches.open(pwaCache).then(cache => {
    console.log('new cache ready')
    return cache.addAll([
      '/',
      'style.css',
      'thumb.png',
      'main.js'
    ])
  })

  e.waitUntil(cacheReady)
})

self.addEventListener('activate', e => {
  let cacheCleaned = caches.keys().then(keys => {
    keys.forEach(key => {
      if (key !== pwaCache) {
        return caches.delete(key)
      }
    })
  })

  e.waitUntil(cacheCleaned)
})

self.addEventListener('fetch', e => {
  // skip for remote fetch
  if (!e.request.url.match(location.origin)) return

  // serve local fetch from cache
  let newResponse = caches.open(pwaCache).then(cache => {
    return cache.match(e.request).then(res => {
      // check request was found in cache
      if (res) {
        console.log(`Serving ${res.url} from cache`)
        return res
      }

      // fetch on behalf of client and cache
      return fetch(e.request).then(fetchRes => {
        cache.put(e.request, fetchRes.clone())
        return fetchRes
      })
    })
  })

  e.respondWith(newResponse)
})