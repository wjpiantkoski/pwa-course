// Service worker
self.addEventListener('fetch', e => {
  // if (e.request.url.endsWith('style.css')) {
  //   e.respondWith(fetch('style2.css'))
  // }

  // if (e.request.url.endsWith('/greet')) {
  //   let headers = new Headers({ 'Content-Type': 'text/html' })
  //   let customResponse = new Response('<h1>Hello World!</h1>', { headers })
  //   e.respondWith(customResponse)
  // }

  if (e.request.url.endsWith('camera_feed.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            return res
          }
          return new Response('Camera feed curently not available')
        })
    )
  }
})

