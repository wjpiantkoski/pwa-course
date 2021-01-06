// send notification on push
self.addEventListener('push', e => {
  let n = self.registration.showNotification('A notification from the service worker') 
  e.waitUntil(n)
})