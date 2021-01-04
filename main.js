// progressive enhancement (sw supported)
if (navigator.serviceWorker) {
  // register the sw
  navigator.serviceWorker.register('/sw.js', { scope: '/posts/' })
    .then(function (registration) {
      console.log('sw registered')
    })
    .catch(function (err) {
      console.error(err)
    })
}