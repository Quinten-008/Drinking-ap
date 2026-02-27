// firebase-messaging-sw.js
// Rounds - Push Notification Service Worker

importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB79_lT_UeSj3WZgGUjl6FJsugK-Oa-dFM",
  authDomain: "drinking-ap.firebaseapp.com",
  projectId: "drinking-ap",
  storageBucket: "drinking-ap.firebasestorage.app",
  messagingSenderId: "869345427783",
  appId: "1:869345427783:web:4db013a00017054e2c4c62"
});

const messaging = firebase.messaging();

// Achtergrond notificaties (app is gesloten of op achtergrond)
messaging.onBackgroundMessage(payload => {
  console.log('[SW] Achtergrond bericht ontvangen:', payload);

  const { title, body, icon } = payload.notification || {};

  self.registration.showNotification(title || 'Rounds', {
    body: body || 'Nieuw bericht',
    icon: icon || '/icon-192.png',
    badge: '/icon-192.png',
    tag: payload.data?.roomId || 'rounds-msg',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    actions: [
      { action: 'open', title: '💬 Bekijken' },
      { action: 'dismiss', title: 'Sluiten' }
    ]
  });
});

// Klik op notificatie → open de app
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const roomId = event.notification.data?.roomId;
  const url = roomId ? `/?openRoom=${roomId}` : '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      // Als app al open is, focus dan
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.focus();
          client.postMessage({ type: 'OPEN_ROOM', roomId });
          return;
        }
      }
      // Anders open nieuw venster
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// Service worker activeren
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
