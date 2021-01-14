const pwaCache = 'pwa-cache-1'
const staticCache = ['/', '/index.html', '/style.css', '/main.js', '/thumb.png']

// cache strategies
self.addEventListener('fetch', e => {
  /**
   * 1. Cache only
   * Good for statics assets (App shell)
   */
  //e.respondWith(caches.match(e.request))

  /**
   * 2. Cache with Network Fallback
   * Same as 1 but can handle cache delete
   */
  // e.respondWith(caches.match(e.request).then(res => {
  //   if (res) {
  //     return res
  //   } else {
  //     return fetch(e.request).then(newRes => {
  //       caches.open(pwaCache).then(cache => cache.put(e.request, newRes))
  //       return newRes.clone()
  //     })
  //   }
  // }))

  /**
   * 3. Network with cache fallback
   * If its not possible to get content from network, go to the cache
   */
  // e.respondWith(fetch(e.request)
  //   .then(res => {
  //     // cache latest version
  //     caches.open(pwaCache).then(cache => cache.put(e.request, res))
  //     return res.clone()
  //   })
  //   .catch(err => caches.match(e.request)) // fallback to cache
  // ) 

  /**
   * CAche with network update
   * Go to the cache to serve user immediatly, then update content in the background
   */
  // e.respondWith(caches.open(pwaCache).then(cache => {
  //   return cache.match(e.request).then(res => {
  //     // update
  //     let updatedResponse = fetch(e.request).then(newRes => {
  //       // cache new response
  //       cache.put(e.request, newRes.clone())
  //       return newRes
  //     })

  //     return res || updatedResponse
  //   })
  // }))

  /**
   * 5. Cache and network race
   */
  // let firstResponse = new Promise((resolve, reject) => {
  //   // track rejections
  //   let firstRejectReceived = false
  //   let rejectOnce = () => {
  //     if (firstRejectReceived) {
  //       reject('no responde received')
  //     } else {
  //       firstRejectReceived = true
  //     }
  //   }

  //   // try network
  //   fetch(e.request).then(res => {
  //     res.ok ? resolve(res) : rejectOnce()
  //   }).catch(rejectOnce)

  //   // try cache
  //   caches.match(e.request).then(res => {
  //     res ? resolve(res) : rejectOnce()
  //   }).catch(rejectOnce)
  // })

  // e.respondWith(firstResponse)
})

self.addEventListener('install', e => {
  e.waitUntil(caches.open(pwaCache).then(cache => cache.addAll(staticCache)))
})

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => {
    keys.forEach(key => {
      if (key !== pwaCache) {
        return caches.delete(key)
      }
    })
  }))
})

