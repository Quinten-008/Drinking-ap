// functions/index.js
// Firebase Cloud Function — stuurt push notificaties via FCM
// 
// INSTALLATIE:
// 1. npm install -g firebase-tools
// 2. firebase login
// 3. firebase init functions  (kies je project: drinking-ap)
// 4. Kopieer dit bestand naar functions/index.js
// 5. firebase deploy --only functions

const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp }     = require('firebase-admin/app');
const { getMessaging }      = require('firebase-admin/messaging');
const { getFirestore }      = require('firebase-admin/firestore');

initializeApp();

exports.sendPushNotification = onDocumentCreated('pushQueue/{docId}', async event => {
  const data = event.data.data();
  if (!data || data.sent) return;

  const { token, title, body, data: msgData } = data;

  try {
    await getMessaging().send({
      token,
      notification: { title, body },
      data: msgData || {},
      webpush: {
        notification: {
          title,
          body,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          vibrate: [200, 100, 200],
        },
        fcmOptions: { link: '/' }
      },
      apns: {
        payload: {
          aps: {
            alert: { title, body },
            badge: 1,
            sound: 'default'
          }
        }
      }
    });

    // Markeer als verzonden
    await getFirestore().doc(`pushQueue/${event.params.docId}`).update({ sent: true });
    console.log('Push verzonden naar:', token.substring(0, 20) + '...');
  } catch(e) {
    console.error('Push mislukt:', e.message);
    await getFirestore().doc(`pushQueue/${event.params.docId}`).update({ sent: false, error: e.message });
  }
});
