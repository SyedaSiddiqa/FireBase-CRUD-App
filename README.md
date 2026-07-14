# FireBase-CRUD-App
# 🍯 Firebase CRUD App

A simple and cute CRUD (Create, Read, Update, Delete) web app built with **HTML, CSS, JavaScript**, and **Firebase Firestore** — styled in a soft white & butter-yellow theme.

## ✨ Features

- ➕ **Add** new entries (Name + Email) to Firestore
- 📋 **View** all saved entries in a live table
- ✏️ **Update** existing entries
- 🗑️ **Delete** entries instantly
- 💛 Clean, responsive, mobile-friendly UI
- ⚡ Real-time data straight from Firebase Firestore (no backend server needed)

## 🛠️ Tech Stack

| Layer     | Tech                          |
|-----------|--------------------------------|
| Structure | HTML5                          |
| Styling   | CSS3 (custom, no framework)    |
| Logic     | JavaScript (ES Modules)        |
| Database  | Firebase Firestore (v12)       |
| Font      | Google Fonts – Poppins         |

## 📁 Project Structure

```
firebase-crud-app/
├── index.html      # Markup + form + table
├── style.css        # White & butter-yellow theme
├── script.js         # Firebase logic (Add/Read/Update/Delete)
└── README.md
```

## 🚀 Getting Started

1. **Clone / download** this project folder.
2. Make sure all three files (`index.html`, `style.css`, `script.js`) are in the same folder.
3. Open the folder in **VS Code**.
4. Run it with the **Live Server** extension (right-click `index.html` → *Open with Live Server*).
5. That's it — the app is already connected to its Firebase project, so data starts saving right away.

> No `npm install` or build step needed — everything runs directly in the browser via Firebase's CDN modules.

## 🔥 Firebase Setup (if you want to use your own project)

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable **Firestore Database** (start in test mode for development).
3. Get your Firebase config from **Project Settings → General → Your apps → SDK setup**.
4. Replace the `firebaseConfig` object in `script.js` with your own keys:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

5. Firestore will automatically create a `user` collection the first time you add data.

## 🧭 How It Works

- **Add Data** → saves a new document to the `user` collection in Firestore.
- **Update** button (per row) → loads that row's data into the form and switches to *update mode*.
- **Update Data** button → saves the edited values back to Firestore and resets the form.
- **Delete** button (per row) → removes that document from Firestore immediately.
- The table refreshes automatically after every add / update / delete.

## 📱 Responsive Design

The layout adapts for smaller screens — buttons stack vertically and table text scales down on mobile devices.
live demo:https://firebase-crud-app-assi.netlify.app/

Made with 💛 using Firebase + vanilla JS.
