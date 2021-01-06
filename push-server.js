// web push module
const webpush = require('web-push')
const vapid = require('./vapid.json')

// configure keys
webpush.setVapidDetails(
  'mailto:wjpiantkoski@gmail.com',
  vapid.publicKey,
  vapid.privateKey
)

const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/daPp7H0A8uI:APA91bEJ6zJ1zFPweaY-KnodLu7yCB9OsNdfiP2eDpcEdNZDFL7YtpFrDhdxEJP9FtXm7EQ6CtDoe1ZAlKNHkCxnUwvkZlhvaEL3wH1VL-T47eamglqVFC4IdAUt3yTxuNHCKomaFjl9",
  keys: {
    auth: "lAPaUAPli48vmhx_ab55gA",
    p256dh: "BESRZCf0kgPSeY7VU8ZRUMXmSxwTQgoZsezna8lra5hCeoPOahLjh302T-6RfjxKqKivtlmtJqlqjMvqy1ec22o"
  }
}

webpush.sendNotification(pushSubscription, 'A notification from the push server')
console.log('Push sent to client')