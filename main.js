if (navigator.serviceWorker) {
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      let pubKey = "BLSWNJSnephK_kFbuDorLIY1UeOVPNWSgDtzu48-x1dKW9TpaDD-YILcjaEfpZZjNvvUOT3bFdWwwhi1pIccpMk"

      // check if subscription exists
      registration.pushManager.getSubscription()
        .then(sub => {
          if (sub) {
            return sub
          }

          let applicationServerKey = urlBase64ToUint8Array(pubKey)

          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey
          })
        })
        .then(sub => sub.toJSON())
        .then(console.log)
        .catch(console.error)
    })
    .catch(console.error)
}