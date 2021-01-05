self.addEventListener('message', e => {
  if (e.data === 'update_self') {
    console.log('Service worker updating')
    self.skipWaiting()
  }
})