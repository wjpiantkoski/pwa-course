// Service worker
self.addEventListener('install', e => {
  let installPromise = new Promise((resolve) => {
    // some async task
    setTimeout(resolve, 3000)
  })

  // tasks for install event
  e.waitUntil(installPromise)

  self.skipWaiting()
})

self.addEventListener('activate', e => {
  console.log('new sw activated')
})