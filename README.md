# 🍺 Rounds

> **Afspreken met je crew** — een social app om samen te drinken, afspraken te plannen en te chatten met vrienden.

![Rounds App](https://img.shields.io/badge/status-live-brightgreen) ![Firebase](https://img.shields.io/badge/backend-Firebase-orange) ![HTML](https://img.shields.io/badge/frontend-HTML%2FJS-yellow)

---

## 📱 Wat is Rounds?

Rounds is een web-app gebouwd voor vrienden die samen willen afspreken. Je maakt een account aan, voegt vrienden toe, plant events, chat en deelt foto's — alles op één plek.

---

## ✨ Functies

| Functie | Beschrijving |
|---|---|
| 🔐 **Login & accounts** | Registreer met naam + e-mail, blijft ingelogd |
| 🎉 **Events** | Maak afspraken aan met datum, locatie en beschrijving |
| ✅ **RSVP** | Geef aan of je komt, misschien of niet |
| 💬 **Privéchat** | Stuur berichten naar individuele vrienden |
| 👥 **Groepschat** | Maak groepen aan met meerdere vrienden |
| 📍 **Meeting point** | Stel een locatie in via straat + stad, zichtbaar voor iedereen |
| 👤 **Vrienden** | Zoek vrienden op e-mailadres, stuur verzoeken |
| 📸 **Foto's** | Deel foto's met de hele crew, verwijder je eigen foto's |

---

## 🛠️ Technologie

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Backend:** [Firebase](https://firebase.google.com/)
  - Authentication (e-mail/wachtwoord login)
  - Firestore (database voor berichten, events, vrienden)
  - Realtime listeners voor chat
- **Kaarten:** OpenStreetMap + Nominatim geocoding
- **Hosting:** GitHub Pages

---

## 🚀 Live gebruiken

De app is live op:

```
https://quinten-008.github.io/Rounds
```

Open de link op je iPhone in **Safari** → tik op het deelicoon → **"Zet op beginscherm"** om het als app te installeren.

---

## ⚙️ Lokaal draaien

1. Clone de repo:
```bash
git clone https://github.com/Quinten-008/Rounds.git
```

2. Open `index.html` in je browser — dat is alles! Geen installatie nodig.

> ⚠️ Je hebt wel een actieve internetverbinding nodig voor Firebase.

---

## 🔥 Firebase setup

De app maakt gebruik van Firebase. De volgende services zijn vereist:

- **Authentication** → Email/Password ingeschakeld
- **Firestore Database** → Test mode of met beveiligingsregels
- **Firestore Rules:**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 📁 Projectstructuur

```
Drinking-ap/
└── index.html      # Volledige app (één bestand)
```

---

## 👤 Gemaakt door

**Quinten** — [@Quinten-008](https://github.com/Quinten-008)

---

## 📄 Licentie

Privéproject — alle rechten voorbehouden.
