self.addEventListener('message', e => {
  // respond to all clients
  self.clients.matchAll()
    .then(clients => {
      clients.forEach((client, i) => {
        // only respond to sending client
        if (e.source.id === client.id) {
          client.postMessage('Private Hellow from SW ' + i)
        }
      })
    })
    .catch(err => {
      console.error(err)
    })
})