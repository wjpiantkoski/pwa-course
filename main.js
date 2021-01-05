// progressive enhancement (sw supported)
if (navigator.serviceWorker) {
  // register the sw
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      if (registration.active) {
        registration.active.postMessage('respond to this')
      }
    })
    .catch(function (err) {
      console.error(err)
    })

    navigator.serviceWorker.addEventListener('message', e => {
      console.log(e.data)
    })
}