// progressive enhancement (sw supported)
// if (navigator.serviceWorker) {
//   // register the sw
//   navigator.serviceWorker.register('/sw.js')
//     .then(function (registration) {})
//     .catch(function (err) {
//       console.error(err)
//     })
// }

// Notification support
if (window.Notification) {
  function showNotification() {
    let options = {
      body: 'Some notification information',
      icon: '/icon.png'
    }

    let n = new Notification('My new notification', options)

    n.onclick = () => {
      console.log('notification clicked')
    }
  }

  // manage permission
  if (Notification.permission === 'granted') {
    showNotification()
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(permission => {
      if (permission === 'granted') {
        showNotification()
      }
    })
  }
}