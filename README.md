# Rounds 🍺

**Afspreken met je crew — een besloten sociale app voor vrienden.**

Rounds is een PWA (Progressive Web App) gebouwd met vanilla HTML, CSS en JavaScript, aangedreven door Firebase. De app werkt zowel op mobiel als desktop en is volledig besloten: alleen mensen die via een vriendschapsverzoek worden uitgenodigd krijgen toegang.

---

## Schermafbeeldingen

| Mobiel | Desktop |
|--------|---------|
| Bottom navigatie, fullscreen chat | Zijbalk, split-screen chat |
| Optimaal voor iPhone homescreen | Werkt in elke moderne browser |

---

## Functies

### 🔒 Toegang & Beveiliging
- Volledig besloten app — alleen via uitnodiging (vriendschapsverzoek)
- Nieuwe accounts zonder connecties worden geblokkeerd
- Firestore security rules blokkeren ongeautoriseerde toegang server-side
- Enkel vrienden zien elkaars events, foto's, video's en locaties

### 👥 Vrienden
- Vrienden zoeken op e-mailadres
- Vriendschapsverzoeken sturen, accepteren of weigeren
- Vrienden verwijderen
- Privégesprek starten via vriendenlijst

### 🎉 Events
- Events aanmaken met naam, datum, locatie en beschrijving
- RSVP systeem — ✅ Ik kom / 🤔 Misschien / ❌ Kan niet
- Klikbare aanwezigheidslijst per categorie
- Countdown timer per event (bijv. "Nog 2d 4u")
- Eigen chatruimte per event
- Events verwijderen (alleen de maker)
- Alleen events van jezelf of vrienden zijn zichtbaar

### 💬 Chat
- Privégesprekken (DM) met vrienden
- Groepschats aanmaken met meerdere leden
- Reacties op berichten — ❤️ 😂 🔥 👍 🍺 😮 😢 (dubbeltik)
- Ongelezen berichtenteller per gesprek (zoals WhatsApp)
- Groepschat verwijderen (maker) of DM geschiedenis wissen
- In-app notificatiebanner bij nieuwe berichten
- Native browsernotificaties wanneer de app op de achtergrond is

### 📍 Locaties
- Live locatie delen met vrienden (realtime via GPS)
- Locaties van vrienden bekijken met directe link naar Google Maps
- Eventlocaties weergegeven op OpenStreetMap embed
- Alleen vrienden zien jouw locatie

### 📸 Media
- Foto's uploaden en delen (max 3MB)
- Video's uploaden en delen (max 10MB) met hover-preview
- Eigen media verwijderen
- Alleen media van jezelf of vrienden is zichtbaar

### 🏆 Badges & Challenges
Verdien badges door uitdagingen te voltooien:

| Badge | Uitdaging | Vereiste |
|-------|-----------|----------|
| 💬 Eerste bericht | Stuur je eerste bericht | 1 bericht |
| 🗣️ Chatterbox | Blijf chatten | 10 berichten |
| 🎉 Organisator | Maak een event aan | 1 event |
| ✅ Aanwezig! | RSVP op een event | 1 keer |
| 📸 Fotograaf | Upload een foto | 1 foto |
| 🎥 Cameraman | Upload een video | 1 video |
| 📍 Op de radar | Deel je locatie | 1 keer |
| 🦋 Sociaal vlinder | Bouw je netwerk uit | 5 vrienden |
| 🔥 Reactor | Reageer op berichten | 5 reacties |

### 👤 Profiel
- Profielfoto uploaden en aanpassen
- Verdiende badges bekijken
- Challenges en voortgang bijhouden
- Account verwijderen (met wachtwoordbevestiging)

### 🖥️ Desktop & 📱 Mobiel
- **Mobiel:** bottom navigatie, fullscreen chat, FAB knop, PWA installeerbaar
- **Desktop (≥ 900px):** vaste zijbalk, split-screen chat, event grid, paneel voor nieuw event
- Automatisch schakelen op basis van schermgrootte — één bestand, twee layouts

---

## Bestandsstructuur

```
rounds/
├── index.html                  → Volledige app (HTML + CSS + JS in één bestand)
├── firebase-messaging-sw.js    → Service worker voor push notificaties
├── manifest.json               → PWA manifest voor homescreen installatie
├── firestore.rules             → Firebase beveiligingsregels (plakken in console)
└── README.md                   → Dit bestand
```

---

## Setup

### 1. Firebase project aanmaken
1. Ga naar [firebase.google.com](https://firebase.google.com) en maak een nieuw project aan
2. Activeer **Firestore Database** (start in productie-modus)
3. Activeer **Authentication** → Email/Password inschakelen
4. Ga naar **Project Settings (⚙️) → Cloud Messaging** → genereer een Web Push VAPID key

### 2. Firebase config invullen
Vervang de Firebase config in `index.html` en `firebase-messaging-sw.js` met jouw eigen gegevens:
```js
const firebaseApp = initializeApp({
  apiKey: "JOUW_API_KEY",
  authDomain: "JOUW_PROJECT.firebaseapp.com",
  projectId: "JOUW_PROJECT_ID",
  storageBucket: "JOUW_PROJECT.appspot.com",
  messagingSenderId: "JOUW_SENDER_ID",
  appId: "JOUW_APP_ID"
});
```

### 3. Firestore beveiligingsregels instellen
1. Ga naar **Firestore Database → Rules**
2. Kopieer de volledige inhoud van `firestore.rules`
3. Plak dit in het regelvenster en klik **Publish**

### 4. Hosten via GitHub Pages
1. Push alle bestanden naar een GitHub repository
2. Ga naar **Settings → Pages → Branch: main** en sla op
3. Na een minuut is de app live op `https://jouwgebruikersnaam.github.io/jouwrepo`

### 5. Installeren op iPhone
1. Open de app in **Safari** op je iPhone
2. Tik op het **Deel-icoon** (vierkant met pijl omhoog)
3. Kies **"Zet op beginscherm"**
4. De app verschijnt als echt app-icoontje op je homescreen

---

## Technologie

| Onderdeel | Technologie |
|-----------|-------------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES modules) |
| Database | Firebase Firestore (realtime listeners) |
| Authenticatie | Firebase Authentication |
| Push notificaties | Firebase Cloud Messaging (FCM) |
| Hosting | GitHub Pages |
| Lettertypen | Syne + Outfit via Google Fonts |
| Kaarten | OpenStreetMap embed + Google Maps link |
| PWA | Web App Manifest + Service Worker |

---

## Bekende beperkingen

- **Push notificaties (iPhone gesloten):** Apple staat geen achtergrond push toe voor PWA's — notificaties werken alleen wanneer de app open of op de achtergrond is
- **Mediaopslag:** foto's en video's worden als base64 opgeslagen in Firestore — voor grootschalig gebruik is Firebase Storage efficiënter
- **Composite indexes:** bij de eerste gebruik kunnen Firebase index-fouten verschijnen in de browserconsole — klik gewoon op de meegeleverde link om ze automatisch aan te maken

---

## Firestore collecties

| Collectie | Inhoud |
|-----------|--------|
| `users` | Gebruikersprofielen, FCM tokens, profielfoto's |
| `events` | Events met RSVP data |
| `events/{id}/chat` | Berichten per event |
| `friendRequests` | Vriendschapsverzoeken en -statussen |
| `rooms` | Chat rooms (DM en groepen) |
| `rooms/{id}/messages` | Berichten met reacties |
| `photos` | Foto's en video's (base64) |
| `liveLocations` | Realtime GPS locaties |
| `userProgress` | Badge voortgang per gebruiker |
| `pushQueue` | Wachtrij voor push notificaties |

---

*© Quinten De Smet 2026*
