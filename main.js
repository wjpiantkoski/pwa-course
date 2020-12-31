// progressive enhancement (sw supported)
if (navigator.serviceWorker) {
  // register the sw
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('sw registered')
    })
    .catch(function (err) {
      console.error(err)
    })
}

// Get camera feed
fetch('camera_feed.html').then(res => res.text()).then(html => {
  document.getElementById('camera').innerHTML = html
})