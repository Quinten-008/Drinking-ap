<div align="center">

# 🍺 Rounds

**Een besloten sociale app voor vrienden — afspreken, chatten en samen genieten.**

Gebouwd met vanilla HTML/CSS/JS + Firebase. Geen framework, geen build-stap, één bestand.  
Werkt op mobiel (PWA) én desktop. Volledig gratis te hosten via GitHub Pages.

---

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white)

</div>

---

## ✨ Wat kan de app?

### 🎉 Events
- Events aanmaken met naam, datum, locatie en beschrijving
- RSVP: ✅ Ik kom / 🤔 Misschien / ❌ Kan niet
- Klik op de aanwezigheidsteller voor een volledige lijst per categorie
- Countdown timer per event ("Nog 2d 4u")
- Eigen chatruimte per event
- Events verwijderen (alleen de maker)
- Alleen events van jezelf of vrienden zijn zichtbaar

### 💬 Chat
- Privégesprekken (DM) met vrienden
- Groepschats aanmaken
- Berichten beantwoorden met quote (rechtsklik of lang indrukken)
- Berichten vastpinnen bovenaan de chat
- @Vermeldingen met autocomplete
- Reacties op berichten — ❤️ 😂 🔥 👍 🍺 😮 😢 (dubbeltik)
- 📊 Polls aanmaken in chats (max 6 opties, realtime stemmen)
- Ongelezen berichtenteller per gesprek
- Groepschat verwijderen of DM-geschiedenis wissen
- In-app notificatiebanner + native browsernotificaties

### 👥 Vrienden
- Vrienden zoeken op e-mailadres
- Vriendschapsverzoeken sturen, accepteren of weigeren
- 🟢 Online-status instellen (Online / Onderweg / Bezet / Onzichtbaar)
- 🎂 Verjaardagen opslaan en bijhouden van vrienden
- 📲 QR-code genereren om eenvoudig toe te voegen
- Vrienden verwijderen

### 📍 Locaties
- Live locatie delen (realtime GPS)
- Vrienden zien jouw locatie op de kaart + directe link naar Google Maps
- Eventlocaties op OpenStreetMap embed
- Alleen vrienden zien jouw locatie

### 📸 Media
- Foto's delen (max 3MB)
- Video's delen (max 10MB) met hover-preview
- Eigen media verwijderen
- Alleen vrienden zien jouw media

### 🏆 Gamification
**Badges & Challenges** — 9 badges te verdienen:

| Badge | Uitdaging | Vereiste |
|-------|-----------|----------|
| 💬 Eerste bericht | Stuur je eerste bericht | 1 bericht |
| 🗣️ Chatterbox | Blijf chatten | 10 berichten |
| 🎉 Organisator | Maak een event aan | 1 event |
| ✅ Aanwezig! | RSVP op een event | 1 keer |
| 📸 Fotograaf | Upload een foto | 1 foto |
| 🎥 Cameraman | Upload een video | 1 video |
| 📍 Op de radar | Deel je locatie | 1 keer |
| 🦋 Sociaal vlinder | Bouw je netwerk | 5 vrienden |
| 🔥 Reactor | Reageer op berichten | 5 reacties |

**Leaderboard** — rangschikking op events, berichten, badges of streaks  
**🔥 Streaks** — wekelijkse aanwezigheidsreeks wordt bijgehouden

### 👤 Profiel
- Profielfoto uploaden
- Bio toevoegen
- Status instellen
- Verjaardag opslaan
- Badges bekijken
- Challenges en voortgang
- QR-code genereren
- Account verwijderen

### 🔒 Beveiliging
- Volledig besloten — alleen via uitnodiging
- Nieuwe accounts zonder vriendschapsconnectie worden geblokkeerd
- Firestore security rules blokkeren ongeautoriseerde toegang server-side

### 🖥️ Desktop & 📱 Mobiel
- **Mobiel:** bottom nav, fullscreen chat, FAB-knop, installeerbaar als PWA
- **Desktop:** vaste zijbalk, split-screen chat, events in grid
- Automatisch op basis van schermgrootte — één bestand, twee layouts

### 🎨 Extra
- 🌙 Donker/licht thema (wordt onthouden)
- 📰 Activiteitenfeed op het homescreen
- Alle functies werken realtime via Firebase

---

## 🚀 Zelf gebruiken / hergebruiken

Wil je Rounds gebruiken voor jouw eigen vriendengroep? Dat kan volledig gratis!  
Je hebt nodig: een **GitHub account** en een **Firebase account** (gratis Spark plan is voldoende).

---

### Stap 1 — Fork of download het project

**Optie A — Fork (aanbevolen)**
1. Klik rechtsboven op **Fork** op deze GitHub pagina
2. Geef het project een naam (bijv. `mijn-rounds`)
3. Klik **Create fork**

**Optie B — Download**
1. Klik op **Code → Download ZIP**
2. Pak uit en upload de bestanden naar een nieuw GitHub repository

---

### Stap 2 — Firebase project aanmaken

1. Ga naar [console.firebase.google.com](https://console.firebase.google.com)
2. Klik **Project toevoegen** → geef het een naam → klik door
3. Activeer **Google Analytics** naar keuze → **Project aanmaken**

---

### Stap 3 — Firebase diensten instellen

#### Firestore Database
1. Klik in het linkermenu op **Firestore Database**
2. Klik **Database aanmaken**
3. Kies **Productie-modus** → kies een regio (bijv. `europe-west1`) → **Gereed**

#### Authentication
1. Klik op **Authentication** in het linkermenu
2. Klik **Aan de slag**
3. Klik op **E-mail/wachtwoord** → schakel in → **Opslaan**

#### Cloud Messaging (voor notificaties)
1. Klik op het tandwiel ⚙️ naast **Project-overzicht** → **Projectinstellingen**
2. Ga naar het tabblad **Cloud Messaging**
3. Scroll naar **Webconfiguratie** → klik **Sleutelpaar genereren**
4. Kopieer de VAPID-sleutel — je hebt hem zo nodig

---

### Stap 4 — Firebase config kopiëren

1. Ga naar **Projectinstellingen (⚙️) → Algemeen**
2. Scroll naar **Jouw apps** → klik **Web** (`</>`)
3. Geef de app een naam → klik **App registreren**
4. Kopieer het `firebaseConfig` object — dat ziet er zo uit:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "jouw-project.firebaseapp.com",
  projectId: "jouw-project-id",
  storageBucket: "jouw-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

### Stap 5 — Config invullen in de bestanden

Open `index.html` en zoek dit blok (rond regel 892):

```js
const firebaseApp = initializeApp({
  apiKey:"AIzaSyB79_lT_...",        // ← vervang dit
  authDomain:"drinking-ap...",       // ← vervang dit
  projectId:"drinking-ap",           // ← vervang dit
  storageBucket:"drinking-ap...",    // ← vervang dit
  messagingSenderId:"869345427783",  // ← vervang dit
  appId:"1:869345427783:web:..."     // ← vervang dit
});
```

Vervang alle waarden met jouw eigen Firebase config.

Open daarna `firebase-messaging-sw.js` en doe hetzelfde — de config staat daar ook bovenaan.

Zoek vervolgens in `index.html` naar de VAPID-sleutel:

```js
vapidKey: 'BIzWhUjE5bCOpKl...',  // ← vervang met jouw VAPID key
```

---

### Stap 6 — Firestore beveiligingsregels instellen

1. Ga naar **Firestore Database → Regels** (tabblad bovenaan)
2. Verwijder alle bestaande tekst
3. Kopieer de volledige inhoud van `firestore.rules` uit dit project
4. Plak het in het regelvenster
5. Klik **Publiceren**

Dit zorgt ervoor dat alleen vrienden elkaars data kunnen zien.

---

### Stap 7 — Hosten via GitHub Pages

1. Push alle bestanden naar je GitHub repository
2. Ga naar **Settings** (tandwiel) van je repo
3. Klik links op **Pages**
4. Onder **Branch** → kies `main` → map `/root` → klik **Opslaan**
5. Na ±1 minuut is je app live op:  
   `https://jouwgebruikersnaam.github.io/jouwrepo`

6. Voeg dit domein toe aan Firebase:  
   **Authentication → Instellingen → Geautoriseerde domeinen → Domein toevoegen**

---

### Stap 8 — Installeren op iPhone

1. Open je app-URL in **Safari** op je iPhone
2. Tik op het **Deel-icoon** (vierkantje met pijl omhoog)
3. Scroll naar beneden → kies **Zet op beginscherm**
4. Geef het een naam → **Voeg toe**

De app verschijnt als echt icoontje op je homescreen en werkt zoals een gewone app.

---

### Stap 9 — Indexes aanmaken (automatisch)

De eerste keer dat je de app gebruikt kunnen er fouten verschijnen in de browserconsole (F12) over ontbrekende Firebase indexes. Dit is normaal.

- Klik gewoon op de **blauwe link** in de foutmelding
- Firebase maakt de index automatisch aan
- Wacht ±1 minuut en probeer opnieuw

---

### Stap 10 — Personaliseren (optioneel)

Wil je de app aanpassen voor jouw crew? Dit zijn de makkelijkste dingen om te wijzigen:

| Wat | Waar in `index.html` |
|-----|---------------------|
| App naam "Rounds" | Zoek naar `Rounds` in de `<title>` en `.ll`, `.lo`, `.abl` |
| Tagline "Afspreken met je crew 🍺" | Zoek naar `Afspreken met je crew` |
| Accentkleur (goud) | Verander `--am:#f59e0b` in `:root` naar een andere hex kleur |
| Copyright naam | Zoek naar `Quinten De Smet` |
| Badge uitdagingen | Zoek naar `const CHALLENGES = [` |
| Max foto grootte | Zoek naar `3 * 1024 * 1024` |

---

## 📁 Bestandsstructuur

```
rounds/
├── index.html                  → Volledige app (HTML + CSS + JS)
├── firebase-messaging-sw.js    → Service worker voor pushnotificaties
├── manifest.json               → PWA-manifest voor homescreen installatie
├── firestore.rules             → Firestore beveiligingsregels
└── README.md                   → Dit bestand
```

---

## 🛠️ Technologie

| Onderdeel | Technologie |
|-----------|-------------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES modules) |
| Database | Firebase Firestore (realtime) |
| Authenticatie | Firebase Authentication |
| Pushnotificaties | Firebase Cloud Messaging (FCM) |
| Hosting | GitHub Pages |
| Lettertypen | Syne + Outfit — Google Fonts |
| Kaarten | OpenStreetMap + Google Maps |
| PWA | Web App Manifest + Service Worker |
| QR-codes | api.qrserver.com |

---

## 🗄️ Firestore collecties

| Collectie | Wat staat erin |
|-----------|----------------|
| `users` | Profielen, foto's, bio, status, verjaardag, FCM-token |
| `events` | Events met datum, locatie, RSVP-data |
| `events/{id}/chat` | Berichten per event |
| `friendRequests` | Vriendschapsverzoeken en statussen |
| `rooms` | Chatrooms (DM en groepen) |
| `rooms/{id}/messages` | Berichten met reacties en replies |
| `photos` | Foto's en video's (base64) |
| `liveLocations` | Realtime GPS-locaties |
| `userProgress` | Badge voortgang, streak per gebruiker |
| `pushQueue` | Wachtrij voor pushnotificaties |

---

## ⚠️ Bekende beperkingen

- **iPhone — app volledig gesloten:** pushnotificaties werken niet als de iPhone vergrendeld is en de app volledig gesloten. Dit is een Apple-beperking voor PWA's. Als de app op de achtergrond staat werkt alles wel.
- **Media opslag:** foto's en video's worden als base64 opgeslagen in Firestore. Dit werkt prima voor kleine groepen maar voor honderden gebruikers is Firebase Storage efficiënter.
- **Gratis Firebase limiet:** het gratis Spark-plan van Firebase heeft limieten (50.000 lees- en 20.000 schrijfbewerkingen per dag). Voor een kleine vriendengroep is dit ruimschoots voldoende.

---

## 🤝 Bijdragen

Voel je vrij om een pull request in te dienen of een issue aan te maken als je een bug vindt of een idee hebt!

---

<div align="center">

*© Quinten De Smet 2026 — Gebouwd met ❤️ voor de crew*

</div>
