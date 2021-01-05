// progressive enhancement (sw supported)
if (navigator.serviceWorker) {
  // register the sw
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      registration.onupdatefound = () => {
        let newSW = registration.installing

        // Prompt user for update
        if (confirm('App update found. Do you want to update now?')) {
          newSW.postMessage('update_self')
        }
      }
    })
    .catch(function (err) {
      console.error(err)
    })
}